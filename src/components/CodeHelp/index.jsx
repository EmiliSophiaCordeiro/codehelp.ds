import React from 'react';
import './index.css';
import logo2 from '../../assets/logo2.png';
import logo from '../../assets/logo.png';
import codigo from '../../assets/codigo.png';
import tutoriais from '../../assets/tutoriais.png';
import forum from '../../assets/forum.png';


export default function CodeHelp() {
  return (
    <div >
      <header>
        <nav>
        <img src={logo2} alt="ch" width="335.8px" height="150.6px" />
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#features">Recursos</a></li>
            <li><a href="#community">Comunidade</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
          <button className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <section id="hero">
        <div className="hero-content">
          <h1>Aprenda a Programar com o Code Help.ds</h1>
          <p>Sua plataforma para tirar dúvidas, corrigir código e conectar-se com outros estudantes.</p>
          <button>Comece Agora</button>
          </button>
        </div>
        <div className="hero-image">
        <img src={logo} alt="logo do site" width="525.6px" height="401px" />
        </div>
      </section>

      <section id="about">
        <h2>Sobre Nós</h2>
        <p>O Code Help.ds foi criado para ajudar estudantes de programação de todos os níveis a superar os desafios do aprendizado. Nossa missão é fornecer um ambiente de apoio e recursos úteis para que você possa alcançar seus objetivos.</p>
        <button>Saiba Mais</button>
        <div className="hidden-content">
          <p>Aqui você encontrará:</p>
          <ul>
            <li>Correção de código por especialistas</li>
            <li>Tutoriais e artigos explicativos</li>
            <li>Fórum de discussão para tirar dúvidas</li>
            <li>Comunidade de estudantes apaixonados por programação</li>
          </ul>
        </div>
      </section>

      <section id="features">
        <h2>Recursos</h2>
        <button>Mostrar/Ocultar Recursos</button>
        <div className="features-list">
          <div className="feature">
          <img src={codigo} alt="Ícone de código" />
            <h3>Correção de Código</h3>
            <p>Envie seu código e nossos especialistas te ajudarão a encontrar e corrigir erros.</p>
          </div>
          <div className="feature">
          <img src={tutoriais} alt="Ícone de tutorial" />
            <h3>Tutoriais e Artigos</h3>
            <p>Explore nossa biblioteca de tutoriais e artigos sobre diversos tópicos de programação.</p>
          </div>
          <div className="feature">
          <img src={tutoriais} alt="Ícone de tutorial" />
            <h3>Fórum de Discussão</h3>
            <p>Faça perguntas, compartilhe seus conhecimentos e interaja com outros estudantes.</p>
          </div>
        </div>
      </section>

      <section id="community">
        <h2>Comunidade</h2>
        <p>Junte-se à nossa comunidade de estudantes apaixonados por programação. Compartilhe seus projetos, tire dúvidas e aprenda com outros.</p>
        <button>Acesse o Fórum</button>
      </section>

      <section id="contact">
        <h2>Entre em Contato</h2>
        <p>Tem alguma dúvida? Entre em contato conosco!</p>
        <form>
          <input type="text" placeholder="Nome" required /><br /><br />
          <input type="email" placeholder="Email" required /><br /><br />
          <textarea placeholder="Mensagem" required></textarea><br />
          <button type="submit">Enviar</button><br />
          <p>ou</p>
          <p>Siga-nos no Instagram <a href="https://www.instagram.com/codehelp.ds">codehelp.ds</a>!</p>
        </form>
      </section>

      <footer>
        <p>&copy; 2025 Code Help.ds.</p>
      </footer>

    </div>
  )
}


