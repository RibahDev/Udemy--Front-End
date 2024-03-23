import "./MyForm.css"

import { useState } from "react"

const MyForm = ({ userName, userEmail}) => {
    // 3 - Gerenciamento de dados
    const [name, setName] = useState(userName);
    const [email, setEmail] = useState(userEmail);

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
    }

    // 5 - Envio de form
    const handleSubmit = (e) => { 
        e.preventDefault();

        console.log(name, email, bio, role);

    // Validação
    // Envio

    // 7 - Limpando form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
    }
    
    
 
  return(
     <div>
        {/*1- Criação de Form */}
        {/* 5 -Envio de Formulário */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name || ""}/>
                {/* 6 - Controlled input */}
            </div>
            {/* 2- Label envolvendo input */}
            <label>
                <span>E-mail:</span>
                {/* 4 - Simplificando  manipulação*/}
                <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""}/>
            </label>
            {/* 8 - Textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - Select */}
            <label>
                <span>Função do Sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  ) 
}

export default MyForm