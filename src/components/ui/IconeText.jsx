function IconeText({ label, title, link, icon: Icon, target }) {
    
    return (
        <a
            className="flex gap-4 items-center hover:opacity-80 transition"
            href={link}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
            {Icon && <Icon className="text-cosmic-blue text-xl shrink-0" />}
            <div className="flex flex-col">
                <div className="text-xs text-white-55">{title}</div>
                <span className="text-sm text-cosmic-blue">{label}</span>
            </div>
        </a>
    )
}

export default IconeText
