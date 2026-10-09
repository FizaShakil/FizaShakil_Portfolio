export const ALL_CATEGORY = 'All';

export const matchesCategory = (project, category) =>
  category === ALL_CATEGORY || (project.categories || []).includes(category);
