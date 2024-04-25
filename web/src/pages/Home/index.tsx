import Header from '../../components/Header';

import homeImg from '../../assets/home-img.png';
import projectIcon from '../../assets/projectIcon.png';
import accessIcon from '../../assets/accessIcon.png';
import permissionIcon from '../../assets/permissionIcon.png';
import okIcon from '../../assets/okIcon.png';
import appointmentIcon from '../../assets/appointment.png';
import teamIcon from '../../assets/teamIcon.png';
import calendarIcon from '../../assets/calendarIcon.png';
import finishIcon from '../../assets/finishIcon.png';

const Home = () => {
  const scrollToAnchor = (e, anchorId) => {
    e.preventDefault();
    const anchor = document.getElementById(anchorId);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <Header />
      <div className="pt-[60px]">
        <section className="h-screen px-4 py-20 flex flex-col items-center gap-4">
          <h1 className="text-5xl md:text-4xl sm:text-3xl text-center font-semibold ">
            Não perca mais nenhum compromisso!
          </h1>
          <h2 className="w-2/4 md:w-3/4 sm:w-3/4 text-2xl sm:text-lg text-center font-semibold">
            Com o{' '}
            <span className="font-bold text-purple-500">
              Organizador de Reuniões
            </span>{' '}
            você pode manter registro de seus compromissos e marcar a melhor
            data com seu time
          </h2>
          <img src={homeImg} alt="Imagem de agenda" />
          <button onClick={(e) => scrollToAnchor(e, 'section2')}>
            <button className="mt-5 sm:mt-20 px-6 py-2 text-2xl sm:text-lg font-bold rounded text-white bg-purple-500 hover:bg-purple-400 animate-bounce">
              Quero conhecer a plataforma!
            </button>
          </button>
        </section>
        <section
          id="section2"
          className="h-screen text-center px-4 py-20 md:py-18 sm:py-14 bg-gradient-to-bl from-purple-500 to-black"
        >
          <h1 className="text-3xl md:text-2xl sm:text-xl font-bold text-white">
            Serviços oferecidos pela plataforma
          </h1>
          <div className="h-full flex items-center justify-between">
            <div className="w-full h-full pt-10 md:pt-4 sm:pt-4">
              <h2 className="text-2xl md:text-xl sm:text-lg font-semibold text-white">
                Projetos
              </h2>
              <div className="h-5/6 md:w-full flex flex-col items-end justify-start gap-20 md:gap-3 sm:gap-2 text-end md:text-center sm:text-center px-10 md:px-3 sm:px-3 pt-10 text-xl md:text-base sm:text-base text-gray-300">
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col-reverse sm:flex-col-reverse">
                  <h2>Criação de projetos que seu time pode se vincular</h2>
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={projectIcon}
                      alt="Um icone para simbolizar um projeto"
                    />
                  </div>
                </div>
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col-reverse sm:flex-col-reverse">
                  <h2>
                    Projetos podem ser vinculados através de seu código ou
                    através de email
                  </h2>
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={accessIcon}
                      alt="Icone para representar o acesso"
                    />
                  </div>
                </div>
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col-reverse sm:flex-col-reverse">
                  <h2>
                    É possível editar as permissões dos membros vinculados ao
                    projeto
                  </h2>
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={permissionIcon}
                      alt="Icone para representar permissões"
                    />
                  </div>
                </div>
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col-reverse sm:flex-col-reverse">
                  <h2>
                    Uma vez que seu time está vinculado, é hora de botar a mão
                    na massa e marcar os compromissos!
                  </h2>
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={okIcon}
                      alt="Icone para representar o fim da configuração"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[85%] md:h-[95%] md:pt:6 border-l-[2px] rounded border-white" />
            <div className="w-full h-full pt-10 md:pt-4 sm:pt-4">
              <h2 className="text-2xl md:text-xl sm:text-lg font-semibold text-white">
                Compromissos
              </h2>
              <div className="h-5/6 md:w-full flex flex-col items-start gap-20 md:gap-3 sm:gap-2 text-start md:text-center sm:text-center px-10 md:px-3 sm:px-3 pt-10 text-xl md:text-base sm:text-base text-gray-300">
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col sm:flex-col">
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={appointmentIcon}
                      alt="Um icone para simbolizar um compromisso"
                    />
                  </div>
                  <h2>Criação de compromissos dentro de um projeto</h2>
                </div>
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col sm:flex-col">
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={teamIcon}
                      alt="Icone de time"
                    />
                  </div>
                  <h2>
                    Ao criar o compromisso você deve configurar quem do time faz
                    parte dele.
                  </h2>
                </div>
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col sm:flex-col">
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-5 sm:w-3"
                      src={calendarIcon}
                      alt="Icone de calendário"
                    />
                  </div>
                  <h2>
                    Todos do time deverão escolher as possíveis datas que estão
                    disponíveis
                  </h2>
                </div>
                <div className="md:h-[165px] sm:h-30 flex items-center gap-5 md:gap-2 sm:gap-2 md:flex-col sm:flex-col">
                  <div className="flex justify-center items-center p-2 sm:p-1 border-2 border-white rounded-full">
                    <img
                      className="w-8 md:w-6 sm:w-3"
                      src={finishIcon}
                      alt="Icone de processo finalizado"
                    />
                  </div>
                  <h2>
                    Será informado as datas que todos os participantes podem e é
                    só escolher uma!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
