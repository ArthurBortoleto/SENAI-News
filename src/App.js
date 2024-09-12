import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-orange-400 p-2">
        <h1 className="text-white font-black text-xl">SENAI News</h1>
        <nav className="flex gap-24">
          <a className="text-white font-semibold text-xl" href="#">Home</a>
          <a className="text-white font-semibold text-xl" href="#">Sobre nós</a>
          <a className="text-white font-semibold text-xl" href="#">Contato</a>
        </nav>
      </header>
      <main className="mx-6 flex-1 m-8">
        <h2 className="mt-6">Principais notícias:</h2>
        <div className="flex justify-around flex-wrap gap-4">
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://uploads.dailydot.com/2024/04/travis-scott-fish-meme-.jpg?q=65&auto=format&w=1200&ar=2:1&fit=crop" alt=""/>
            <h3>Travis Scott escreve Deus com d minísculo e vira peixe no interior do Amazonas</h3>
            <p>Vaticano se pronuncia: "Afogue herege"</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://pbs.twimg.com/media/Efz3uQsWoAIbyaH.jpg"/>
            <h3>Cachorro armado deixa 5 feridos no interior paulista</h3>
            <p>Depoimento da vítima: "Cachorro desgraçado"</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://www.texasstandard.org/wp-content/uploads/2023/11/IMG_5927-scaled.jpg"/>
            <h3>Chupa Cabra é flagrado no Ceará</h3>
            <p>Senhora relata lançar um tijolo na cabeça do "bixo"</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXZlPeqHAjUfeqZxEybzbUN_cWTQi3PAiUg&s"/>
            <h3>Idosa descobre a cura do câncer no Rio</h3>
            <p>Segundo Dona Neide "Cachaça com babosa é o segredo"</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://uploads.polemicaparaiba.com.br/2019/08/japoneses-almocando.jpg"/>
            <h3>Japonês é punido por almoçar três minutos antes do horário</h3>
            <p>Seus chefes declararam à imprensa que a ação foi "profundamente lamentável"</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://www.publicitarioscriativos.com/wp-content/uploads/2018/06/dominos-esta-tapando-buracos-pelo-mundo-para-garantir-que-suas-pizzas-cheguem-apresentaveis-4.jpg"/>
            <h3>Pizzaria tapa buracos de ruas para evitar danos a pizzas entregues em casa</h3>
            <p>Ação de marketing da Domino's fez barulho nos EUA</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYz_Oq2xHJUZPkQKXIU9g8k9JcKfbII75Xl81Jq0s25PJ9xNdodqepYr4cT4xffrBTpKQUesksPdM3g3wCb3O5MVCyS3XdDOTcBh-ZS6MPZ8N3DAtworpWaWRYHD9Us0Zjw7i6j2OyamuG/s1600/GAIVOTA+6.jpg"/>
            <h3>Restaurante dá a clientes armas d’água para espantar gaivotas</h3>
            <p>Medida tem funcionado e clientela não precisa mais fugir das aves</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
          <div className="flex flex-col justify-center items-center rounded border-2 border-gray-950 p-2 w-80">
            <img src="https://s3.glbimg.com/v1/AUTH_35862ca5c6ab48b992baf1f1b4f7062e/m-extra-globo-com/incoming/22511052-965-5be/w488h275-PROP/blog_buddha.jpg"/>
            <h3>Homem que ensinou cachorro a fazer saudação nazista é condenado por crime de ódio</h3>
            <p>Ele alegou que era uma brincadeira. Foi condenado por crime de ódio</p>
            <a className="bg-orange-400 p-2 w-full text-center" href="#">Ver mais</a>
          </div>
        </div>
      </main>
      <footer className="bg-orange-400 p-2 flex justify-center text-white font-semibold">
        <h4>Todos os direitos reservados &copy; 2024</h4>
      </footer>
    </div>
  );
}

export default App;