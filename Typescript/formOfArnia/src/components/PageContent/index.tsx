import { ContentStyle, ContentTitleStyle, ContentPStyle } from './style.ts'

const PageContent = () => {
  return (
    <ContentStyle>
      <ContentTitleStyle>
        Você sabia que no Brasil existirão por volta de 260 mil vagas na área de
        TI até 2024? Venha se formar na profissão mais quente do mundo. Venha
        estudar na Arnia.
      </ContentTitleStyle>
      <ContentPStyle>
        Baixe agora mesmo o e-book “O passo-a-passo para se tornar um
        desenvolvedor de software”, escrito por nossa qualificada equipe de
        profissionais e você aprenderá:
        <ul>
          <li>
            As diferenças básicas entre as diferentes vagas de TI do mercado
          </li>
          <li>Onde começar a estudar</li>
          <li>
            Quais habilidades são necessárias para um desenvolvedor de software
          </li>
          <li>O que as empresas esperam de uma entrevista de emprego</li>
        </ul>
      </ContentPStyle>
    </ContentStyle>
  );
};

export default PageContent