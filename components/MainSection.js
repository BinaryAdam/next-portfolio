export default function MainSection({children, id, row = 1, classes=''}) {
    return (
        <section className={`2xl:col-start-2  row-start-${row} ${classes}`} id={id}>
            {children}
        </section>
    )
}