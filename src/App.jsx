import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} alt="Logo" />
        </div>
        <h1>Lucas Santos André - Consultoria em DevOps</h1>
      </header>
      <main>
        <section>
          <h2>Serviços</h2>
          <p>Engenheiro de Plataforma e Devops, especializado em automação e gestão de sistemas, com sólida experiência em backstage, Azure DevOps, Cloud (GCP, AWS, Azure) e ambientes Linux.</p>
          <p>Destaco-me na criação eficiente de pipelines CI/CD utilizando ferramentas líderes, como Azure DevOps, para promover a integração contínua e entrega confiável.</p>
          <p>Expertise em arquitetura e manutenção de ambientes em nuvem, com foco em GCP, AWS e Azure, utilizando módulos Terraform para um provisionamento ágil e escalável.</p>
          <p>Minhas habilidades abrangem a administração eficaz de servidores Linux, incluindo CentOS e Debian, proporcionando estabilidade e alto desempenho.</p>
        </section>
      </main>
      <MainContent />
    </>
  );
}

export default App;