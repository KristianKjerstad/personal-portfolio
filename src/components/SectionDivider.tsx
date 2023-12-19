import '../SectionDivider.css'

export const SectionDivider = (props: { title: string }) => {
    const { title } = props

    return (
        <div className="p-16 text-center text-3xl">
            <h3>{title.toUpperCase()}</h3>
            <div className="divider"></div>
        </div>
    )
}
