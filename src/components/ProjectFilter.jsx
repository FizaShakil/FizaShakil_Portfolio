import { ALL_CATEGORY, matchesCategory } from '../utils/projectFilter';

const getCategoryList = (projectList) => {
  const unique = new Set();
  projectList.forEach((project) => {
    (project.categories || []).forEach((category) => unique.add(category));
  });
  return [ALL_CATEGORY, ...Array.from(unique).sort((a, b) => a.localeCompare(b))];
};

const ProjectFilter = ({ projects, activeCategory, onChange }) => {
  const categories = getCategoryList(projects);
  const total = projects.length;
  const visibleCount = projects.filter((project) => matchesCategory(project, activeCategory)).length;

  const countFor = (category) =>
    category === ALL_CATEGORY
      ? total
      : projects.filter((project) => matchesCategory(project, category)).length;

  const statusText =
    visibleCount === total
      ? `Showing ${total} ${total === 1 ? 'project' : 'projects'}`
      : `Showing ${visibleCount} of ${total} ${total === 1 ? 'project' : 'projects'}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
        <p className="kicker text-ink-faint">Filter by category</p>
        <p role="status" aria-live="polite" className="text-caption text-ink-faint">
          {statusText}
        </p>
      </div>

      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="filter-chip"
            aria-pressed={category === activeCategory}
            onClick={() => onChange(category)}
          >
            <span>{category}</span>
            <span className="font-mono text-[0.625rem] opacity-70" aria-hidden="true">
              {countFor(category)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectFilter;
