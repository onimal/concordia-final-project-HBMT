import styled from "styled-components";

import plante from "./assets/plante.png"

const Services = () => {

    return (
        <Wrapper>
            <Main>
                <ServicesArea>
                    <ServiceWrapper>
                        <NameWrapper>
                            <Name>
                                Suédois
                            </Name>
                        </NameWrapper>
                        <DescriptionWrapper>
                            <Description>
                            Le massage suédois agit principalement au niveau des systèmes locomoteur ( muscles et tendons ) et liquidiens ( sang et lymphe ).<br></br><br></br>
                            Il aide à retrouver de la mobilité  et stimule les circulations sanguine et lymphatique.<br></br>
                            De plus, il favorise la nutrition et l’élimination cellulaire.<br></br><br></br>
                            Le massage suédois se compose d’enchainements de manœuvres appliquées sur la masse musculaire ou sur les articulations ( ligaments, tendons)<br></br>
                            servant à remettre en état la musculature.<br></br><br></br>
                            Il dissout les tensions du corps, stimule et fortifie globalement tout en relaxant.
                            </Description>
                        </DescriptionWrapper>
                        <PriceListArea>
                            <div>
                                
                            </div>
                            <div>
                                <PriceList>Tarifs au Centre</PriceList>
                                <Price>60 min. 90$</Price>
                                <Price>75 min. 100$</Price>
                                <Price>90 min. 110$</Price>
                            </div>
                        </PriceListArea>
                        
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <NameWrapper>
                            <Name>
                                Californien
                            </Name>
                        </NameWrapper>
                        <DescriptionWrapper>
                            <Description>
                            Le massage californien est une invitation à prendre conscience de son être.<br></br><br></br>
                            C’est un massage à l’huile qui utilise des manœuvres de rythmes et de profondeur variées.<br></br><br></br>
                            Le massage californien se distingue par ses longs mouvements fluides et enveloppants.<br></br><br></br>
                            Donné avec écoute, compassion et respect il favorise l’émergence de la mémoire corporelle ainsi qu’une grande détente.<br></br><br></br><br></br>
                            Les bienfaits :<br></br><br></br>
                            Douleurs chroniques<br></br>
                            Insomnie<br></br>
                            Maladies arthritiques<br></br>
                            Fibromyalgie<br></br>
                            Personnes ayant vécues des traumatismes<br></br>
                            Gestion du stress<br></br>
                            Douleurs musculaires<br></br>
                            </Description>
                        </DescriptionWrapper>
                        <PriceListArea>
                            <div>
                                <PriceList>Tarifs à Domicile</PriceList>
                                <Price>60 min. 110$</Price>
                                <Price>75 min. 120$</Price>
                                <Price>90 min. 130$</Price>
                            </div>
                            <div>
                                
                            </div>
                        </PriceListArea>
                    </ServiceWrapper>
                    <PlantImage src={plante} />
                    <ServiceWrapper>
                        <NameWrapper>
                            <Name>
                                Lomi Lomi
                            </Name>
                        </NameWrapper>
                        <DescriptionWrapper>
                            <Description>
                            Le Lomi Lomi est un massage hawaïen originalement pratiqué par les guérisseurs traditionnels cherchant à recréer l’harmonie des quatre éléments (air, terre, eau et feu)<br></br><br></br>
                            et à faciliter le passage entre les différentes phases de la vie.<br></br>
                            Basé sur une philosophie appelée Huna, chaque chose dans le monde cherche l’harmonie et l’amour.<br></br><br></br>
                            C’est un massage profond et enveloppant qui s’effectue avec les avant-bras, les coudes et les mains dans des mouvements fluides et rythmés.<br></br><br></br>
                            Le Lomi Lomi apporte un sentiment de bien-être total, qui libère les neurotoxines et les pensées nuisibles tout en retrouvant son énergie corporelle.
                            </Description>
                        </DescriptionWrapper>
                        <PriceListArea>
                            <div>
                            </div>
                            <div>
                            <PriceList>Tarifs au Centre</PriceList>
                                <Price>60 min. 95$</Price>
                                <Price>75 min. 105$</Price>
                                <Price>90 min. 115$</Price>
                            </div>
                        </PriceListArea>
                    </ServiceWrapper>
                    <ServiceWrapper>
                        <NameWrapper>
                            <Name>
                                Drainage Lymphatique
                            </Name>
                        </NameWrapper>
                        <DescriptionWrapper>
                            <Description>
                            Cette technique utilise des mouvements doux et circulaires qui dirigent la lymphe vers les ganglions lymphatiques , ce qui favorise le nettoyage, la désintoxication<br></br><br></br>
                            et le désengorgement du tissu conjonctif et des ganglions lymphatiques.<br></br><br></br><br></br>
                            Les bienfaits :<br></br><br></br>
                            Stimule le système immunitaire.<br></br>
                            Nettoie et décongestionne les tissus.<br></br>
                            Augmente la circulation lymphatique et sanguine.<br></br>
                            Décongestionne les muscles squelettiques.<br></br>
                            Régularise la motricité intestinale.<br></br>
                            Favorise la relaxation en agissant sur le système parasympathique.
                            </Description>
                        </DescriptionWrapper>
                        <PriceListArea>
                            <div>
                            <PriceList>Tarifs à Domicile</PriceList>
                                <Price>60 min. 115$</Price>
                                <Price>75 min. 125$</Price>
                                <Price>90 min. 135$</Price>
                            </div>
                            <div>
                                
                            </div>
                        </PriceListArea>
                    </ServiceWrapper>
                </ServicesArea>
            </Main>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    min-width: 640px;
    display: flex;
    justify-content: center;
`
const Main = styled.div`
    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;    
`
const ServicesArea = styled.div`
    height: 80vh;
    display: grid;
    justify-content: center;    
    grid-template-columns: 20% 20% 10% 20% 20%;    
`
const ServiceWrapper = styled.div`
    background-color: #7e9e6c;
    border-radius: 5px;
    height: 75vh;
    width: 20vw;
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template-rows: 15% 60% 25%;
    justify-content: center;
    align-items: center;    
`
const PlantImage = styled.img`
    width: 100px;
    justify-self: center;
    align-self: center;
    opacity: 70%;
`
const NameWrapper = styled.div`
    height: 100%;
    width: 20vw;    
    display: flex;
    justify-content: center;
    align-items: center;
`
const Name = styled.p`
    color: white;
    font-size: 24px;
    text-decoration: underline;
    font-variant-caps: small-caps;
    
`
const DescriptionWrapper = styled.div`
    height: 100%;
    width: 100%;    
    display: flex;
    align-items: center;
    padding: 20px;
`
const Description = styled.p`
    color: white;
    font-size: 16px;
    padding: 10px;
    text-align: justify;
`
const PriceListArea = styled.div`
    height: 100%;
    width: 100%;    
    display: grid;
    grid-template-columns: 50% 50%;
    
    align-items: center;
`
const PriceList = styled.p`
    color: white;    
    text-align: center;
    font-size: 20px;
    line-height: 40px;
`
const Price = styled.p`
    color: white;
    text-align: center;
`

export default Services;