/* 
Desafio1 : Atualizador automatico de noticias
Implemente um componente que vusca automaticamente novas noticias a cada 30 segundo usando useEffect
Importação dos hooks useState e useEffect do React
*/
import { useState, useEffect } from "react";

function NewsUpdater(){
    const [news, setNews] = useState(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCount(prevCount => prevCount +1)
        }, 30000)

        return () => clearInterval(timerId)

    }, [count])

    useEffect(() => {
        const fetchNewsData = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
            const newsData = await response.json();
            
            if (count >= newsData.length) {
                setCount(0);
            } else {
                setNews(newsData[count]);
            }
        };

        fetchNewsData();

        return () => setNews(null)

    }, [count]);

    return (
        <div>
            {news ? (
                <div id="content">
                    <h1 className="news">Ultimas Noticias!</h1>
                    <div className="news-itens">
                        <h1>{news.title}</h1>
                        <p>{news.body}</p>
                    </div>
                    
                </div>
            ) : (
                <p>Carregando informações da Noticia</p>
            )}
        </div>
        
    )
}   

export default NewsUpdater