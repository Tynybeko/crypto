import Banner from "@/components/Banner";
import TradeView from "@/components/TradeView";
import { Metadata } from 'next'
import '@/styles/homePage.scss'
import MyTools from "@/components/MyTools";



export const metadata: Metadata = {
    title: 'Крипто Банк "Cryptonit.kg": Купить и продать криптовалюту в Оше',
    description: 'Обменивайте, покупайте и продавайте свою крипту по стабильным и выгодным ценам!',
}

export default function Home() {
    return (
        <div className="home_page">
            <Banner />
            <MyTools />
            <TradeView />
        </div>
    )

}
