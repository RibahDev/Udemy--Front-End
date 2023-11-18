// 4 - Template Expression

const TemplateExpression = () => {
    const name = "Jão";

    const data = {
        age: 23,
        job: "Programador"
    }

  return (
    <div>
        <p>A somne é {2 + 2}</p>
        <h3>Bem vindo {name}!</h3>
        <p>Atualmente tem {data.age} anos e trabalha como {data.job} Jr</p>
    </div>
  )
}

export default TemplateExpression