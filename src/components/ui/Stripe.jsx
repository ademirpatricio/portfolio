import Button from '../ui/Button'

function Stripe(){
    return (
        <section className="absolute z-100 w-full p-4 bg-red-500">
            <div className="mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" href="/projetos" size="lg">Ver projetos</Button>
          <Button variant="secondary" size="lg" target="_blank"
          href="https://wa.me/5581998590849?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20Ademir%20Patr%C3%ADcio">Fala comigo ⇢</Button>
        </div>
        </section>
    )
}
export default Stripe;