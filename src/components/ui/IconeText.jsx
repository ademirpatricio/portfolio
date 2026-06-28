function IconeText({ label, title, link, icon: Icon, target, iconClassName = 'text-cosmic-blue' }) {
    
    return (
        <a
            className="flex gap-4 items-center mt-8 text-left hover:opacity-80 transition"
            href={link}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
            <Icon className={`${iconClassName} text-xl shrink-0`}/>
            <div className="flex flex-col">
                <div className="text-xs text-white-55">{title}</div>
                <span className="text-sm text-cosmic-blue leading-tight">{label}</span>
            </div>
        </a>
    )
}

export default IconeText
