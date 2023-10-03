const questions = [
  
  {
    question: 'Qual é o autor da obra "Dom Quixote"?',
    options: ['Miguel de Cervantes', 'William Shakespeare', 'Leo Tolstoy', 'Charles Dickens'],
    correctAnswer: 'Miguel de Cervantes'
  },
  {
    question: 'Qual é o elemento químico mais abundante na crosta terrestre?',
    options: ['Oxigênio', 'Carbono', 'Silício', 'Ferro'],
    correctAnswer: 'Silício'
  },
  {
    question: 'Quem foi o primeiro homem a pisar na Lua?',
    options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Alan Shepard'],
    correctAnswer: 'Neil Armstrong'
  },
  {
    question: 'Qual é o maior planeta do sistema solar?',
    options: ['Terra', 'Júpiter', 'Saturno', 'Marte'],
    correctAnswer: 'Júpiter'
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'Qual é a capital do Japão?',
    options: ['Pequim', 'Tóquio', 'Seul', 'Bangkok'],
    correctAnswer: 'Tóquio'
  },
  {
    question: 'Quem escreveu "Romeu e Julieta"?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'F. Scott Fitzgerald'],
    correctAnswer: 'William Shakespeare'
  },
  {
    question: 'Qual é o maior rio do mundo?',
    options: ['Rio Nilo', 'Rio Amazonas', 'Rio Yangtzé', 'Rio Mississipi'],
    correctAnswer: 'Rio Amazonas'
  },
  {
    question: 'Quantos continentes existem na Terra?',
    options: ['3', '5', '6', '7'],
    correctAnswer: '7'
  },
  {
    question: 'Quem foi o primeiro presidente dos Estados Unidos?',
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
    correctAnswer: 'George Washington'
  },
  {
    question: 'Qual é o maior oceano do mundo?',
    options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico', 'Oceano Ártico'],
    correctAnswer: 'Oceano Pacífico'
  },
  {
    question: 'Quem escreveu a peça "Hamlet"?',
    options: ['Miguel de Cervantes', 'William Shakespeare', 'Leo Tolstoy', 'Charles Dickens'],
    correctAnswer: 'William Shakespeare'
  },
  {
    question: 'Qual é a capital da França?',
    options: ['Londres', 'Madrid', 'Roma', 'Paris'],
    correctAnswer: 'Paris'
  },
  {
    question: 'Qual é o maior deserto do mundo?',
    options: ['Deserto do Saara', 'Deserto de Atacama', 'Deserto de Gobi', 'Deserto do Kalahari'],
    correctAnswer: 'Deserto do Saara'
  },
  {
    question: 'Quem foi o líder da Revolução Cubana?',
    options: ['Fidel Castro', 'Che Guevara', 'Raul Castro', 'Hugo Chávez'],
    correctAnswer: 'Fidel Castro'
  },
  {
    question: 'Qual é o planeta conhecido como "Planeta Vermelho"?',
    options: ['Vênus', 'Marte', 'Júpiter', 'Urano'],
    correctAnswer: 'Marte'
  },
  {
    question: 'Quem escreveu "1984"?',
    options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'J.R.R. Tolkien'],
    correctAnswer: 'George Orwell'
  },
  {
    question: 'Qual é a maior cadeia de montanhas do mundo?',
    options: ['Montanhas Rochosas', 'Montanhas dos Andes', 'Cordilheira do Himalaia', 'Montanhas dos Apalaches'],
    correctAnswer: 'Cordilheira do Himalaia'
  },
  {
    question: 'Qual é o elemento mais abundante no universo?',
    options: ['Hélio', 'Hidrogênio', 'Oxigênio', 'Carbono'],
    correctAnswer: 'Hidrogênio'
  },
  {
    question: 'Qual é o maior animal do mundo?',
    options: ['Elefante africano', 'Girafa', 'Baleia azul', 'Tubarão branco'],
    correctAnswer: 'Baleia azul'
  },
  {
    question: 'Quem é a autora de "Harry Potter"?',
    options: ['J.K. Rowling', 'Stephenie Meyer', 'George R.R. Martin', 'J.R.R. Tolkien'],
    correctAnswer: 'J.K. Rowling'
  },
  {
    question: 'Qual é o processo pelo qual as plantas convertem a luz solar em energia?',
    options: ['Fotossíntese', 'Quimiossíntese', 'Respiração', 'Digestão'],
    correctAnswer: 'Fotossíntese'
  },
  {
    question: 'Quem é conhecido como "Rei do Pop"?',
    options: ['Elvis Presley', 'Michael Jackson', 'Prince', 'James Brown'],
    correctAnswer: 'Michael Jackson'
  },
  {
    question: 'Qual é o maior órgão do corpo humano?',
    options: ['Coração', 'Cérebro', 'Fígado', 'Pele'],
    correctAnswer: 'Pele'
  },
  {
    question: 'Qual é o símbolo químico para o ouro?',
    options: ['Au', 'Ag', 'Fe', 'Cu'],
    correctAnswer: 'Au'
  },
  {
    question: 'Qual é a montanha mais alta do mundo?',
    options: ['Monte Everest', 'Monte Kilimanjaro', 'Monte Denali', 'Monte Fuji'],
    correctAnswer: 'Monte Everest'
  },
  {
    question: 'Qual é o maior continente do mundo?',
    options: ['América do Sul', 'Europa', 'África', 'Ásia'],
    correctAnswer: 'Ásia'
  },
  {
    question: 'Quem é o criador da teoria da relatividade?',
    options: ['Isaac Newton', 'Galileu Galilei', 'Albert Einstein', 'Stephen Hawking'],
    correctAnswer: 'Albert Einstein'
  },
  {
    question: 'Qual é o processo de separação de uma substância em suas partes constituintes por meio de eletricidade?',
    options: ['Destilação', 'Eletroforese', 'Decantação', 'Dissolução'],
    correctAnswer: 'Eletroforese'
  },
  {
    question: 'Qual é o rio mais longo do mundo?',
    options: ['Rio Amazonas', 'Rio Nilo', 'Rio Yangtzé', 'Rio Mississippi'],
    correctAnswer: 'Rio Amazonas'
  },
  {
    question: 'Quem é considerado o pai da filosofia ocidental?',
    options: ['Sócrates', 'Aristóteles', 'Platão', 'Heráclito'],
    correctAnswer: 'Sócrates'
  },
  {
    question: 'Qual é a fórmula química da água?',
    options: ['H2O2', 'CO2', 'H2O', 'CH4'],
    correctAnswer: 'H2O'
  },
  {
    question: 'Qual é o maior planeta do sistema solar?',
    options: ['Terra', 'Júpiter', 'Saturno', 'Netuno'],
    correctAnswer: 'Júpiter'
  },
  {
    question: 'Quem foi o pintor da "Mona Lisa"?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    correctAnswer: 'Leonardo da Vinci'
  },
  {
    question: 'Qual é a capital da Rússia?',
    options: ['São Petersburgo', 'Moscovo', 'Kiev', 'Cazaquistão'],
    correctAnswer: 'Moscovo'
  },
  {
    question: 'Qual é a capital da Austrália?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 'Canberra'
  },
  {
    question: 'Quem foi o primeiro presidente dos Estados Unidos?',
    options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'John Adams'],
    correctAnswer: 'George Washington'
  },
  {
    question: 'Qual é o maior animal terrestre?',
    options: ['Elefante', 'Girafa', 'Rinoceronte', 'Hipopótamo'],
    correctAnswer: 'Elefante'
  },
  {
    question: 'Quem é o autor de "A Odisséia"?',
    options: ['Virgílio', 'Homero', 'Sófocles', 'Eurípedes'],
    correctAnswer: 'Homero'
  },
  {
    question: 'Qual é o planeta conhecido como "Planeta Vermelho"?',
    options: ['Vênus', 'Marte', 'Júpiter', 'Urano'],
    correctAnswer: 'Marte'
  },
  {
    question: 'Quem é o criador da teoria da relatividade?',
    options: ['Isaac Newton', 'Galileu Galilei', 'Albert Einstein', 'Stephen Hawking'],
    correctAnswer: 'Albert Einstein'
  },
  {
    question: 'Qual é o maior órgão do corpo humano?',
    options: ['Coração', 'Cérebro', 'Fígado', 'Pele'],
    correctAnswer: 'Pele'
  },
  {
    question: 'Qual é o maior deserto do mundo?',
    options: ['Deserto do Saara', 'Deserto de Atacama', 'Deserto de Gobi', 'Deserto do Kalahari'],
    correctAnswer: 'Deserto do Saara'
  },
  {
    question: 'Qual é a capital da Argentina?',
    options: ['Buenos Aires', 'Montevidéu', 'Santiago', 'Lima'],
    correctAnswer: 'Buenos Aires'
  },
  {
    question: 'Qual é a capital da China?',
    options: ['Pequim', 'Xangai', 'Cantão', 'Shenzhen'],
    correctAnswer: 'Pequim'
  },
  {
    question: 'Quem escreveu "O Pequeno Príncipe"?',
    options: ['Antoine de Saint-Exupéry', 'Hans Christian Andersen', 'Roald Dahl', 'J.K. Rowling'],
    correctAnswer: 'Antoine de Saint-Exupéry'
  },
  {
    question: 'Qual é o maior órgão interno do corpo humano?',
    options: ['Coração', 'Cérebro', 'Fígado', 'Pulmões'],
    correctAnswer: 'Fígado'
  },
  {
    question: 'Qual é o nome do protagonista de "Naruto"?',
    options: ['Naruto Uzumaki', 'Sasuke Uchiha', 'Sakura Haruno', 'Kakashi Hatake'],
    correctAnswer: 'Naruto Uzumaki',
  },
  {
    question: 'Qual é o nome do protagonista da série "Breaking Bad"?',
    options: ['Walter White', 'Jesse Pinkman', 'Saul Goodman', 'Hank Schrader'],
    correctAnswer: 'Walter White',
  },
 
  {
    question: 'Qual é o álbum mais vendido de todos os tempos, lançado por Michael Jackson?',
    options: ['Thriller', 'Bad', 'Off the Wall', 'Dangerous'],
    correctAnswer: 'Thriller',
  },
  {
    question: 'Em que filme o personagem Jack Dawson, interpretado por Leonardo DiCaprio, afunda com o navio?',
    options: ['Titanic', 'Inception', 'The Departed', 'The Great Gatsby'],
    correctAnswer: 'Titanic',
  },
  {
    question: 'Qual é o nome da série de anime que segue a história de Monkey D. Luffy em busca do tesouro One Piece?',
    options: ['One Piece', 'Naruto', 'Dragon Ball', 'Bleach'],
    correctAnswer: 'One Piece',
  },
  {
    question: 'Qual é o nome do personagem principal da série de videogame "The Legend of Zelda"?',
    options: ['Link', 'Zelda', 'Ganondorf', 'Mario'],
    correctAnswer: 'Link',
  },
  {
    question: 'Qual é o nome da banda britânica famosa por músicas como "Bohemian Rhapsody" e "We Will Rock You"?',
    options: ['Queen', 'The Beatles', 'Led Zeppelin', 'Pink Floyd'],
    correctAnswer: 'Queen',
  },
  {
    question: 'Em qual série de TV os personagens Jim Halpert e Dwight Schrute trabalham na empresa Dunder Mifflin?',
    options: ['The Office', 'Parks and Recreation', 'Brooklyn Nine-Nine', 'Friends'],
    correctAnswer: 'The Office',
  },
  {
    question: 'Qual é o nome do diretor famoso por filmes como "Pulp Fiction" e "Kill Bill"?',
    options: ['Quentin Tarantino', 'Steven Spielberg', 'Martin Scorsese', 'Christopher Nolan'],
    correctAnswer: 'Quentin Tarantino',
  },
  {
    question: 'Qual é o nome da série de jogos eletrônicos onde os jogadores constroem cidades e gerenciam civilizações?',
    options: ['Civilization', 'SimCity', 'Age of Empires', 'Cities: Skylines'],
    correctAnswer: 'Civilization',
  },
  {
    question: 'Qual é o nome da cantora pop conhecida por sucessos como "Bad Romance" e "Poker Face"?',
    options: ['Lady Gaga', 'Katy Perry', 'Taylor Swift', 'Beyoncé'],
    correctAnswer: 'Lady Gaga',
  },
  {
    question: 'Qual é o nome da série de anime em que os personagens caçam monstros gigantes e perigosos?',
    options: ['Attack on Titan', 'My Hero Academia', 'Naruto', 'Dragon Ball Z'],
    correctAnswer: 'Attack on Titan',
  },
  {
    question: 'Qual é o nome da série de TV que segue um grupo de sobreviventes de um apocalipse zumbi?',
    options: ['The Walking Dead', 'Stranger Things', 'Breaking Bad', 'Game of Thrones'],
    correctAnswer: 'The Walking Dead',
  },
  {
    question: 'Qual é o nome do personagem principal da série de jogos "Metal Gear Solid"?',
    options: ['Solid Snake', 'Liquid Snake', 'Big Boss', 'Raiden'],
    correctAnswer: 'Solid Snake',
  },
  {
    question: 'Qual é o nome da série de filmes de fantasia baseada nos livros de J.R.R. Tolkien?',
    options: ['The Lord of the Rings', 'Harry Potter', 'Star Wars', 'The Chronicles of Narnia'],
    correctAnswer: 'The Lord of the Rings',
  },
  {
    question: 'Qual é o nome do álbum lançado por Adele em 2011, que inclui a música "Rolling in the Deep"?',
    options: ['21', '25', '19', 'Adele'],
    correctAnswer: '21',
  },
  {
    question: 'Em qual jogo de vídeo o jogador controla o encanador italiano Mario em sua busca para resgatar a Princesa Peach?',
    options: ['Super Mario Bros.', 'The Legend of Zelda', 'Sonic the Hedgehog', 'Donkey Kong'],
    correctAnswer: 'Super Mario Bros.',
  },
  {
    question: 'Qual é o nome do cantor e compositor britânico que lançou o álbum "X" em 2014?',
    options: ['Ed Sheeran', 'Sam Smith', 'Adele', 'Coldplay'],
    correctAnswer: 'Ed Sheeran',
  },
  {
    question: 'Qual é o nome do personagem principal da série de TV "Sherlock Holmes"?',
    options: ['Sherlock Holmes', 'John Watson', 'James Moriarty', 'Irene Adler'],
    correctAnswer: 'Sherlock Holmes',
  },
  {
    question: 'Em qual filme a personagem Elle Woods, interpretada por Reese Witherspoon, frequenta Harvard Law School?',
    options: ['Legalmente Loira', 'De Repente 30', 'Meninas Malvadas', 'Clueless'],
    correctAnswer: 'Legalmente Loira',
  },
  {
    question: 'Qual é o nome do dragão em "Game of Thrones"?',
    options: ['Drogon', 'Viserion', 'Rhaegal', 'Smaug'],
    correctAnswer: 'Drogon',
  },
  {
    question: 'Qual é o nome da série de TV sobre um grupo de amigos que vivem em Nova York?',
    options: ['Friends', 'How I Met Your Mother', 'The Big Bang Theory', 'Seinfeld'],
    correctAnswer: 'Friends',
  },
 
];


  export default questions;