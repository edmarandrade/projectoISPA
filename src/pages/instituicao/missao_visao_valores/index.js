import React from 'react';
import AppHeader from '../../../components/Header';


function Missao_visao_valores() {
    return (
        <div>
               <header id='header'>
        <AppHeader />
      </header>
        <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url("/img/DSC_0475.jpg") center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
            <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
            <h2 className="text-white f-30">Instituição</h2>
            </div>
        </div>
        {/* Fechamento do banner */}
        <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
            <br />
            <div className="row flex-row-reverse">
            <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
                <br />
                <div className="details-magazine">
                <p className="f-reg f-20">
                    <b style={{textTransform: 'capitalize'}} className="mb-3 text-ispa f-24">Missão</b><br />
                    <br />
                    O Instituto Superior Politécnica Atlântida (ISP-Atlântida) tem como missão: <br />
                    - Promover a qualificação de alto nível, a produção, transmissão, crítica e difusão de saber, 
                    cultura, ciência e tecnologia, através do estudo, da docência e da investigação”.
                    <br />
                </p>
                <br />
                <p className="f-reg f-20">
                    <b style={{textTransform: 'capitalize'}} className="mb-3 text-ispa f-24">Visão</b><br />
                    <br />
                    Ser uma instituição global, reconhecida pela qualidade das suas pesquisas e pela 
                    excelência da investigação nas suas áreas de afirmação, apto de compreender as dinâmicas de
                    transformação da sociedade e de suportar o desenvolvimento da comunidade em que se integra através da extensão universitária.
                </p>
                <br />
                <p className="f-reg f-20">
                    <b style={{textTransform: 'capitalize'}} className="mb-3 text-ispa f-24">Valores</b><br />
                    <br />
                    <b>Qualidade E Excelência:</b> Esforçar-se para os mais altos padrões, conforme comparado e avaliado pelos pares;<br /> 
                    <b>Responsabilidade:</b> Compromisso com o bom uso  dos Recursos Humanos, Fiscais e Físicos que nos são confiados e actualizados;    <br /> 
                    <b>Transparência:</b> Abertura ao escrutínio público sobre nossas acções, processos e uso de nossos recursos;  <br />
                    <b>Diversidade: </b>Reconhecer que a diversidade e a excelência são mutuamente inclusivas, melhorando o nosso ensino, a erudição e o envolvimento da comunidade, bem como a nossa capacidade de interagir com todas as pessoas;  <br /> 
                    <b>Integridade:</b> Consistentemente abraçando e praticando honestidade, verdade e liberdade em tudo o que fazemos;<br />  
                    <b>Respeito: </b>Tratando todas as partes interessadas com civilidade e dignidade;<br />  
                    <b>Responsabilidade Social, Envolvimento da Comunidade:</b> Contribuindo da melhor forma possível para o bem-estar intelectual, social e económico das comunidades que servimos; <br /> 
                    <b>Rigor:</b> Rigidez na organização, planificação e acompanhamento ou monitoramento dos trabalhos prestados. <br /> 
                    <br />
                </p>
                <br />
                </div>
                <br /><br />
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                <a href="/instituicao" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Apresentação
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/presidente_do_presidente" style={{textDecoration: 'none', borderBottom: '1px solid green', borderTop: 1}} className="py-2 text-dark f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Palavras da Presidente
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/Organigrama" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Organigrama 
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/legalidade" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                    Legalidade
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/missao_visao_valores" style={{textDecoration: 'none'}} className="py-2 text-success mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Missão, Visão e Valores
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green', borderTop: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Apoio Social
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/perguntas_frequentes" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Perguntas Frequentes
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>           
                <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
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
            {/* <div class="b-t py-2 mt-xxl-5"></div> */}
        </main>
        </div>

    );
}

export default Missao_visao_valores;