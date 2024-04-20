import React, { useState } from 'react';

const CadastroForm = () => {
  const [formData, setFormData] = useState({
    dadosPessoais: {
      nome: '',
      sobrenome: '',
      cpf: '',
      dataNascimento: '',
      genero: '',
      nacionalidade: ''
    },
    contato: {
      telefone: '',
      celular: '',
      email: '',
      site: ''
    },
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    },
    formacao: {
      curso: '',
      nivel: '',
      instituicao: '',
      dataInicio: '',
      dataConclusao: ''
    },
    dadosProfissionais: []
  });

  const handleChange = (e, section, field) => {
    const { value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [field]: value
      }
    }));
  };

  const handleAddExperience = () => {
    setFormData(prevState => ({
      ...prevState,
      dadosProfissionais: [...prevState.dadosProfissionais, {
        empresa: '',
        cargo: '',
        dataInicio: '',
        dataFim: '',
        descricao: ''
      }]
    }));
  };

  return (
    <div>
      {/* Dados Pessoais */}
      <h2>Dados Pessoais</h2>
      <input type="text" value={formData.dadosPessoais.nome} onChange={e => handleChange(e, 'dadosPessoais', 'nome')} placeholder="Nome" />
      {/* Adicione os outros campos para os dados pessoais aqui */}

      {/* Contato */}
      <h2>Contato</h2>
      <input type="text" value={formData.contato.telefone} onChange={e => handleChange(e, 'contato', 'telefone')} placeholder="Telefone" />
      {/* Adicione os outros campos para o contato aqui */}

      {/* Endereço */}
      <h2>Endereço</h2>
      <input type="text" value={formData.endereco.cep} onChange={e => handleChange(e, 'endereco', 'cep')} placeholder="CEP" />
      {/* Adicione os outros campos para o endereço aqui */}

      {/* Formação Acadêmica */}
      <h2>Formação Acadêmica</h2>
      <input type="text" value={formData.formacao.curso} onChange={e => handleChange(e, 'formacao', 'curso')} placeholder="Curso" />
      {/* Adicione os outros campos para a formação acadêmica aqui */}

      {/* Experiência Profissional */}
      <h2>Experiência Profissional</h2>
      {formData.dadosProfissionais.map((exp, index) => (
        <div key={index}>
          <input type="text" value={exp.empresa} onChange={e => handleChange(e, 'dadosProfissionais', index, 'empresa')} placeholder="Empresa" />
          {/* Adicione os outros campos para a experiência profissional aqui */}
        </div>
      ))}
      <button onClick={handleAddExperience}>Adicionar outra experiência profissional</button>

      {/* Botão de Envio */}
      <button onClick={() => console.log(formData)}>Enviar Cadastro</button>
    </div>
  );
};

export default CadastroForm;
