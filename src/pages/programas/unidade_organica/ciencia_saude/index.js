import React from 'react';

function ApresentacaoCS() {
    return (
        <>
            <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url("../../assets/Not_01.jpg") center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
            <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
                <h1 className="text-white f-30">Apresentação</h1>
            </div>
            </div>
            <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
            <br />
            <div className="row flex-row-reverse">
                <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                <br />
                <div className="details-magazine">
                    <p className="f-reg">
                    <b className="mb-3 text-ispa">Apresentação</b><br />
                    <br />
                    O Instituto Superior Politécnico Atlântida, idealizado e fundado em 2012, legalizado pelo Decreto 
                    Presidencial Nº 168 de 24 de julho de 2012/2013, localizado no município de Belas, bairro Kifica,
                    província de Luanda, é uma instituição dotada de autonomia estatuária Pedagógica, Científica, Cultural, 
                    Administrativa, Financeira e Patrimonial. É um estabelecimento privado integrado na região académica n°1
                    do subsistema do Ensino Superior em Angola. <br /><br />
                    A actual estrutura estabelece a constituição de quatro áreas do conhecimento, a saber: Ciências da Saúde, 
                    Ciências das Engenharias e Tecnologia, Ciências da Gestão e Ciência Sociais. Ao todo, são ministrados 15 cursos de 
                    graduação: licenciatura em Direito, Relações Internacionais, Pedagogia, Psicologia, Sociologia, Gestão de Empresa,
                    Gestão de Recursos Humanos, Contabilidade, Economia, Enfermagem, Análises Clínicas, Engenharia Informática, Engenharia Civil, 
                    Farmácia e Fisioterapia.
                    <br /><br />
                    </p>
                    <br />
                </div>
                <br /><br />
                </div>
                <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                <a href="{% url 'apresentacao' %}" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Apresentação
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="{% url 'presidente' %}" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Palavras da Presidente
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="{% url 'organigrama' %}" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                    <span className="f-reg">
                    Organigrama 
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="{% url 'legalidade' %}" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                    <span className="f-reg">
                    Legalidade
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="{% url 'missao' %}" style={{textDecoration: 'none'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Missão, Visão e Valores
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="{% url 'accaosocial' %}" style={{textDecoration: 'none', borderBottom: '1px solid green', borderTop: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Apoio Social
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="{% url 'perguntas' %}" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                    <span className="f-reg ">
                    Perguntas Frequentes
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>           
                <a href="{% url 'projectos' %}" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                    <span className="f-reg">
                    Projectos 
                    </span>
                    <i className="bi text-success bi-arrow-right" />
                </a>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            </main>
       
        </>
        
    );
}

export default ApresentacaoCS;