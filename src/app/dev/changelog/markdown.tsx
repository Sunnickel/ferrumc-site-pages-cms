export function parseReleaseBody({ body }: { body: string }) {
  const categories = {
    added: [] as string[],
    changed: [] as string[],
    fixed: [] as string[],
    removed: [] as string[],
    security: [] as string[],
  };

  const lines = body.split("\n");
  let currentCategory: keyof typeof categories | null = null;
  const preamble: string[] = [];
  let foundFirstCategory = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect category headers
    const isCategory = /^##\s*(added|new|features?|changed|updates?|fixed|bug\s*fixes?|removed|security)/i.test(
      trimmed,
    );

    if (isCategory) {
      foundFirstCategory = true;

      if (/^##\s*(added|new|features?)/i.test(trimmed)) {
        currentCategory = "added";
      } else if (/^##\s*(changed|updates?)/i.test(trimmed)) {
        currentCategory = "changed";
      } else if (/^##\s*(fixed|bug\s*fixes?)/i.test(trimmed)) {
        currentCategory = "fixed";
      } else if (/^##\s*removed/i.test(trimmed)) {
        currentCategory = "removed";
      } else if (/^##\s*security/i.test(trimmed)) {
        currentCategory = "security";
      }
    } else if (!foundFirstCategory) {
      // Collect preamble content before first category
      preamble.push(line);
    } else if (currentCategory && /^[-*]\s+(.+)/.test(trimmed)) {
      const match = trimmed.match(/^[-*]\s+(.+)/);
      if (match) {
        categories[currentCategory].push(match[1]);
      }
    }
  }

  return {
    preamble: preamble.join("\n").trim(),
    categories: Object.entries(categories)
      .filter(([, items]) => items.length > 0)
      .map(([type, items]) => ({
        type: type as keyof typeof categories,
        items,
      })),
  };
}
