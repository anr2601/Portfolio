import Head from 'next/head'
import Navbar from '@/pages/components/navbar'
import About from '@/pages/components/about'
import Projects from '@/pages/components/projects'
import Contact from '@/pages/components/contact'
import {React, useState} from 'react'

const Home = () => {

  const [message, setMessage] = useState('');

  const handleSendMessage = (dataToSend) => {
    // This function is called by ChildComponentA to send data to ChildComponentB
    setMessage(dataToSend);
  };

  return (
    <>
      <Head>
        <title>Anshumann's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar onSendMessage={handleSendMessage}/>
      
      <main>
        <section className='home' id="home">
        
        <div className='profession-container' id='circle' />
          <div className='home-content'>

            <div className='text'>
              <h3 className='line-1'>Hey, I'm</h3>
              <br />
              <div className='flex'>
                <h3 className='line-21'>Anshumann</h3>
                <p className='space' />
                <h3 className='line-22'>Ravichandar</h3>
              </div>
            </div>

            <p>An aspiring software developer who loves to discover new things every day.</p>

            <a href='#contact' className='btn contact'>CONTACT ME</a>
          </div>
          
        </section>
        
        <About id="#section2"/>
        <Projects id="#section3"/>
        <Contact id="#section4"/>
      </main>
    </>
  );
};

export default Home;
