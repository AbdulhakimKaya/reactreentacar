import React from "react";

const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: '#F5F5F5',
    borderRadius: 16,
    border: 'none',
};

export const AboutText = {
    title: "Hoş Geldiniz!",
    description: "Rent a Car, seyahat deneyiminizi unutulmaz kılmak için burada! Bizimle seyahat ettiğinizde, güvenilirlik, konfor ve uygun fiyatlarla dolu bir deneyim yaşayacaksınız. Misyonumuz, sizin seyahat ihtiyaçlarınızı karşılamak ve seyahatlerinizi keyifli ve sorunsuz hale getirmektir. Rent a Car olarak, geniş araç filomuz ve müşteri odaklı yaklaşımımızla, sizin yanınızdayız."
}

export const AboutContent = [
    {
        key: 1,
        label: "Biz Kimiz?",
        children:
            <p>
                Rent a Car, sektördeki lider konumunu uzun yıllara dayanan deneyimi ve müşteri memnuniyeti odaklı
                yaklaşımı ile sağlamaktadır. Biz, müşterilerimize en iyi hizmeti sunmak için sürekli olarak yenilikler
                ve çözümler geliştiriyoruz. Geniş araç seçeneklerimiz ve esnek kiralama seçeneklerimizle, her
                müşterimizin ihtiyaçlarını karşılamak için buradayız.
            </p>,
        style: panelStyle
    },
    {
        key: 2,
        label: "Neler Sunuyoruz?",
        children:
            <p>
                Rent a Car olarak, seyahat ihtiyaçlarınıza uygun çözümler sunuyoruz. Geniş araç filomuz, son model
                araçlarımız ve çeşitli kiralama seçeneklerimizle, size en uygun aracı seçmenize yardımcı oluyoruz.
                Ayrıca, müşteri memnuniyetini ön planda tutarak, özel hizmetler ve destek sunuyoruz. Rent a Car ile
                seyahat edin, konfor ve güvenin tadını çıkarın!
            </p>,
        style: panelStyle
    },
    {
        key: 3,
        label: "Neden Bizi Tercih Etmelisiniz?",
        children:
            <p>
                Rent a Car olarak, müşteri memnuniyetini en önemli önceliğimiz olarak görüyoruz. Profesyonel ve
                deneyimli ekibimizle, size en iyi hizmeti sunmak için buradayız. Güvenilirlik, kalite ve uygun
                fiyatlarla, seyahatlerinizi daha keyifli ve sorunsuz hale getiriyoruz. Rent a Car ile seyahat edin,
                güvenle yolculuğun tadını çıkarın!
            </p>,
        style: panelStyle
    },
    {
        key: 4,
        label: "Seyahatinizde Size Destek Olacak Bir Marka",
        children:
            <p>
                Rent a Car, sadece araç kiralama hizmeti sunmakla kalmaz, aynı zamanda seyahatinizin her aşamasında size
                destek olacak bir markadır. Uzman ekibimiz, size seyahat planınızı hazırlarken veya yolda iken her türlü
                sorunuzda yardımcı olmak için buradadır. Bizimle seyahat edin ve güvenle yolculuğunuzun keyfini çıkarın!
            </p>,
        style: panelStyle
    },
    {
        key: 5,
        label: "Müşteri Memnuniyeti Odaklı Hizmet Anlayışı",
        children:
            <p>
                Rent a Car, müşteri memnuniyetini her şeyin önünde tutar. Size en iyi hizmeti sunmak için sürekli olarak
                kendimizi geliştirir ve yenilikçi çözümler sunarız. Bizimle çalışarak, seyahatlerinizin her anını
                keyifli ve sorunsuz hale getirebilirsiniz. Müşteri odaklı yaklaşımımızla, her zaman yanınızdayız ve
                ihtiyaçlarınıza en uygun çözümleri sunmak için buradayız.
            </p>,
        style: panelStyle
    },
]