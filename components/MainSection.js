export default function MainSection({children, id, row = 1, classes=''}) {
    return (
        <section className={`md:col-start-2 bg-pink-light row-start-${row} ${classes}`} id={id}>
            {children}
        </section>
    )
}