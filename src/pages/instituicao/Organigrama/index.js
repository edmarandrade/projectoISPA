import React from 'react';
import AppHeader from '../../../components/Header';


function Organigrama() {
    return (
        <div>
               <header id='header'>
        <AppHeader />
      </header>
        {/* banner */}
        <div style={{background: 'linear-gradient(180deg, transparent, #000000E6), url(/img/DSC_0475.jpg) center center', backgroundSize: 'cover', height: '40vh'}} className="banner position-relative">
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
                <p className="f-reg">
                    <b className="mb-3 text-ispa">Organigrama</b><br />
                    <br />
                    O organigrama da Instituição foi concebido obedecendo as diretrizes do Decreto Presidencial n.º 310/20 de 7 de Dezembro, 
                    que estabelece o Regime Jurídico do Subsistema de Ensino Superior, assim como o das políticas Institucionais:    
                </p>
                <br />
                <img src="../assets/Organigrama_page-0001.jpg" alt="Descrição da imagem" width={1300} height={900} />
                </div>
                <br /><br />
            </div>
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
                <a href="{/instituicao" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Apresentação
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/palavra_do_presidente" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
                <span className="f-reg ">
                    Palavras da Presidente
                </span>
                <i className="bi text-success bi-arrow-right" />
                </a>
                <a href="/Organigrama" style={{textDecoration: 'none', borderBottom: '1px solid green'}} className="py-2 text-success f-reg d-flex w-100 justify-content-between">
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
                <a href="/missao_visao_valores" style={{textDecoration: 'none'}} className="py-2 text-dark mt-2 f-reg d-flex justify-content-between">
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

export default Organigrama;