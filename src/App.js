import React, { Component, Fragment } from 'react';
import PageSwitch from 'pageswitch';
import Slide1 from './components/Slide1/Slide1';
import Slide2 from './components/Slide2/Slide2';
import Slide3 from './components/Slide3/Slide3';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null
    }
    this.pw = null;
    this.colors = [
      'linear-gradient(to right, #f953c6, #b91d73)',
      'linear-gradient(to right, #bc4e9c, #f80759)',
      'linear-gradient(to right, #bc4e9c, #f80759)',
      'linear-gradient(to right, #b24592, #f15f79)',
    ];
  }

  componentDidMount() {
    this.pw = new PageSwitch('switcher', {
      duration: 600,
      direction: 0,
      start: 0,
      loop: false,
      ease: 'ease',
      transition: 'flip3d',
      freeze: false,
      mouse: true,
      mousewheel: true,
      arrowkey: true,
      autoplay: false,
    });
    this.pw.on('after', index => {
      this.setState({ activeIndex: index });
    });
    setTimeout(() => {
      this.setState({ activeIndex: 0 });
    }, 1000);
  }

  shouldComponentUpdate(np, { activeIndex }) {
    return activeIndex !== this.state.activeIndex;
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <Fragment>
        <div className="App" style={{ height: window.innerHeight }}>
          <div id='switcher'>
            <Slide2
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={0} />
            <Slide1
              text1='Congrats on'
              text2="your Marriage!"
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={1}
              classes={activeIndex === 1 ? 'slide1 slide1-show' : 'slide1'} />
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={2}
              classes={activeIndex === 2 ? 'slide3 slide3-show' : 'slide3'} />
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={3}
              classes={activeIndex === 3 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Alekhya and Collin!! ❤️ Wishing you a lifetime of happiness together and a love that grows stronger with each passing day! 🥰<br /><br /> - Junnie</div>
                <div className='note'>Alekhya and Collin wishing both of you a future of love happiness and adventures. The best is is always there for you and around every corner. Enjoy it all. 🍾💗🥂<br /><br /> - Dorothy</div>
                <div className='note'>Best wishes Alekhya and Collin! Marriage is a beautiful commitment, wishing you many years of love and happiness!<br /><br />- Kelli</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={4}
              classes={activeIndex === 4 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Hi Matt. I hope you have a great birthday weekend!  Happy returns to your day today and many more to come !! <br /><br />- Jim</div>
                <div className='note'>Matt, may this year be as successful as the last! Happy Birthday!<br /><br />- Luke</div>
                <div className='note'>Happy Birthday Matt!  Wishing you many special moments on this special day!<br /><br /> - Andy</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={5}
              classes={activeIndex === 5 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Love growing<br />Entwined couple<br />Sharing often<br />Their truths<br /><br />- Joh</div>
                <div className='note'>Congrats Alekhya and Collin,<br />best wishes on this wonderful journey. May all your dreams in your life come true!<br /><br /> - Aashish</div>
                <div className='note'>Congratulations to y'all! Wishing you a lifetime of love, happiness and lots of fun! 😀<br /><br />- Lauen</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={6}
              classes={activeIndex === 6 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Wishing you another wonderful year of happiness and joy. Happy Birthday Matt!<br /><br />- Dayana</div>
                <div className='note'>Wishing you both a journey full of joy, happiness, and rich stories to share for generations to come!<br /><br />- Bassam</div>
                <div className='note'>Congratulations and best wishes for a lifetime of love and happiness!<br /><br />- Lee Ann</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={7}
              classes={activeIndex === 7 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Best wishes on this wonderful journey, as you build your new lives together.<br /><br />- Sumit</div>
                <div className='note'>A successful marriage requires falling in love many times with the same person<br /> - Mignon McLaughlin<br />Best Wishes!<br /><br /> - Betsy</div>
                <div className='note'>Congratulations, and wishing you a lifetime of happiness and plentiful 🌮🔔<br /><br />- Matt</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={8}
              classes={activeIndex === 8 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>“When you find the person you want to spend the rest of your life with...you want the rest of your life to start as soon as possible.”  Here’s to the start of your wonderful new life!<br /><br />- Andy</div>
                <div className='note'>Many many congratulations Alekya<br /><br />- Ashfoq</div>
                <div className='note'>Congratulations and wishing you a long and happy marriage<br /><br />- Samiullah</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={9}
              classes={activeIndex === 9 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Your wedding day may come and go, but may your love forever grow! Congratulations and best wishes for a blissful journey ahead<br /><br />- Ali</div>
                <div className='note'>Many congratulations Alekhya on starting the most beautiful chapter of your life <br /><br />- Umair</div>
                <div className='note'>May every day that you spend together in your new life hold a wonderful surprise for you. Congratulations on your wedding<br /><br />- Deepak 🧦</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={10}
              classes={activeIndex === 10 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Many Congratulations Alekhya...<br /><br />- Yashpal</div>
                <div className='note'>Congratulations to you both on your very special day and the beginning of your fairytale ❤️❤️<br /><br />- Divya</div>
                <div className='note'>Congratulations ! Wishing you both lots of love and happiness <br /><br />- Anupriya</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={11}
              classes={activeIndex === 11 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Shaadi ki bohot bohot subhkamnaye Alekhya<br /><br />- Himanshu</div>
                <div className='note'>Congratulations Alekhya !!! Congratulations on your wedding day! May you have a happy married life together<br /><br />- Abhijeet</div>
                <div className='note'>Shadi Mubarik Alekhya <br /><br />- Taimur</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={12}
              classes={activeIndex === 12 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Congratulations on your wedding day and best wishes for a happy life together!<br /><br />- Nicole</div>
                <div className='note'>Congratulations Alekhya!!  Enjoy your special day and have a wonderful time in Kauai!!<br /><br />- Jim</div>
                <div className='note'>Congratulations !! Wishing you a happy and blessed life ahead <br /><br />- Muhammad</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={13}
              classes={activeIndex === 13 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>congratulations Alekhya May the love and happiness you feel today shine through the years<br /><br />- Shiza</div>
                <div className='note'>Congratulations and many blessings!<br /><br />- Liza</div>
                <div className='note'>Congratulations, Alekhya and Collin~ May you transcend the limits of the ordinary together ☀️<br /><br />- Yasmeen</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={14}
              classes={activeIndex === 14 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Congratulations! <br /><br />- Sana</div>
                <div className='note'>Congrats Alekhya! Very happy for you ❤️<br /><br />- Saman</div>
                <div className='note'>Congratulations and best wishes, Alekhya!<br /><br />- Theresa</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={15}
              classes={activeIndex === 15 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Wishing you a lifetime of love and happiness Congratulations<br /><br />- Dayana</div>
                <div className='note'>Wishing you a marriage full of happiness and cats! Congratulations to oyu both!<br /><br />- Conor</div>
                <div className='note'>Congratulations!<br /><br />- Mark</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[0]}
              activeIndex={activeIndex}
              index={16}
              classes={activeIndex === 16 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Congratulations Alekhya ! Wishing you both a great future ahead<br /><br />- Scott</div>
                <div className='note'>Congratulations Alekhya and Collin!! <br /><br />- Molly</div>
                <div className='note'>Many congratulations and best of wishes for your future together Alekhya and Colin!<br /><br />- Daniel</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[3]}
              activeIndex={activeIndex}
              index={17}
              classes={activeIndex === 17 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>😻😻😻😻😻😻<br /><br />- Anna</div>
                <div className='note'>Congratulations! Wishing you both success and happiness in this new chapter of your lives!<br /><br />- Sameer</div>
                <div className='note'>Congratulations to both of you, wishing you a happy life together!<br /><br />- Jamie</div>
              </div>
            </Slide3>
            <Slide3
              color={this.colors[1]}
              activeIndex={activeIndex}
              index={18}
              classes={activeIndex === 18 ? 'slide3 slide3-show' : 'slide3'}>
              <div className='notes'>
                <div className='note'>Congratulations and best of wishes for your future together!<br /><br />- Mati</div>
                <div className='note'>Congratulations to both of you. Wish you a very Happy Married Life !!<br /><br />- Ratnakar</div>
                <div className='note'>Congrats on your special day guys! What a year it's been for you two! Wishing you many more exciting adventures!<br /><br />- Alex</div>
              </div>
            </Slide3>
            <Slide1
              text1='Love,'
              text2='Carta'
              color={this.colors[2]}
              activeIndex={activeIndex}
              index={19}
              classes={activeIndex === 19 ? 'slide1 slide-end slide1-show' : 'slide1 slide-end'} />
          </div>
        </div>
      </Fragment>
    );
  }
}
