const blogModules = {
  "ai-autonomous-drones": () =>
    import("@/data/blogs/ai-autonomous-drones"),

  "autonomous-drone-navigation-explained": () =>
    import("@/data/blogs/autonomous-drone-navigation"),

  "drone-swarm-technology-explained": () =>
    import("@/data/blogs/drone-swarm-technology"),

  "precision-agriculture-drones": () =>
    import("@/data/blogs/precision-agriculture-drones"),

  "best-agricultural-drones": () =>
    import("@/data/blogs/best-agricultural-drones"),

  "drone-lidar-vs-photogrammetry": () =>
    import("@/data/blogs/drone-lidar-vs-photogrammetry"),

  "thermal-imaging-drones": () =>
    import("@/data/blogs/thermal-imaging-drones"),

  "rtk-vs-ppk-drones": () =>
    import("@/data/blogs/rtk-vs-ppk-drones"),

  "security-surveillance-drones": () =>
    import("@/data/blogs/security-surveillance-drones"),

  "search-and-rescue-drones": () =>
    import("@/data/blogs/search-and-rescue-drones"),

  "industrial-drone-inspections": () =>
    import("@/data/blogs/industrial-drone-inspections"),

  "commercial-drone-buying-guide": () =>
    import("@/data/blogs/commercial-drone-buying-guide"),

  "best-fpv-racing-drones": () =>
    import("@/data/blogs/best-fpv-racing-drones"),
};

export async function getBlogBySlug(slug) {
  const loader = blogModules[slug];

  if (!loader) {
    return null;
  }

  try {
    const module = await loader();
    return module.default;
  } catch {
    return null;
  }
}