export default function MainSection({children, id}) {
    return (
        <section className="md:col-start-2 bg-pink-light" id={id}>
            {children}
        </section>
    )
}