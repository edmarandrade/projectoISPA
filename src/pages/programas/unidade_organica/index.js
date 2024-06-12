import React from 'react';
import AppHeader from '../../../components/Header';

function Unidade_organica() {
    return (
        <>
            <header id='header'>
        <AppHeader />
      </header>
        <div style={{background: 'linear-gradient(180deg, transparent, #000000E6) center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
        <img src='../../assets/Not_01.jpg 'alt=''/>
        <div style={{bottom: '1rem'}} className="px-3 px-md-5 px-xl-5 px-xxl-5  position-absolute">
            <h1 className="text-white f-30">Unidade Orgânica</h1>
        </div>
        </div>
        <main className="px-3 px-md-5 px-xl-5 px-xxl-5 py-2">
        <br />
        <div className="row flex-row-reverse">
            <div className="col-12 col-md-8 col-lg-9 col-xl-10 col-xxl-10">
            <br />
            <div className="details-magazine">
                <p className="f-reg">
                <b className="display-6 mb-3 text-success">Apresentação</b><br />
                <br />
                Unidade Orgânica, tendo os seus cursos devidamente legalizados através do Decreto Executivo n.º 433/12, de 24 de Outubro, fundado desde 2013, pela entidade promotora Instituto Superior Politécnico Atlântida, cujo na idoneidade na vertente de ensino desde 2003. Representado pela Dra. Soqui Isabel Mendes, licenciada em Ciências da Saúde.<br/><br/> Em 2013 arrancou o ano académico com mais de 800 alunos, 3 cursos e 65 professores, 27 salas de aulas. Sendo que em 2018 foram outorgados mais de 100 estudantes da primeira promoção, 2018  e em 2021 mais de 200 estudantes, quadros de alta qualificação, esperando que os mesmos façam a diferença no mercado nacional e Internacional gerando e difundindo conhecimentos, preservando e divulgando valores para a transformação das sociedades. <br /><br />
                Atualmente, a Unidade orgânica da Saúde possui um Centro Médico Atlântida para a conciliação da teoria e prática aos estudantes e professores dos cursos ministrados.
                <br /><br />
                </p>
                <br />
            </div>
            <br /><br />
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
            <a href="/unidade_organica" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                Apresentação
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="/missao_visao_valoresCS" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                Missão Visão Valores
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Programa
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>
            <a href="# " style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Projetos
                </span>
                <i className="bi text-success bi-arrow-right" />
            </a>          
            <a href="/docentesCS" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark f-reg d-flex w-100 justify-content-between">
                <span className="f-reg">
                Docentes 
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
     )
}

export default Unidade_organica;