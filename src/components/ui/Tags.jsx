function Tags({ tags = [] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-6 max-w-6xl">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-span font-medium uppercase border border-cosmic-blue
          text-cosmic-blue border border-cosmic-blue/30 bg-cosmic-blue/10 px-4 py-2 rounded-btn"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

export default Tags
