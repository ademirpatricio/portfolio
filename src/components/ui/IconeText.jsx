function IconeText({ 
    label, 
    title, 
    link,
    className = '', 
    icon: Icon, target, iconClassName = 'text-cosmic-blue' 
}) {
    
    return (
        <a
            className={`${className} flex gap-4 items-center 
            text-left hover:opacity-80 transition`}
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
