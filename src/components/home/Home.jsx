import React from 'react';
import illustrationWorking from '../../assets/illustration-working.svg'
import './home.css';

function Home() {
  return (
    <div className='homeContainer'>
        <section className='sectionIllustration'>
        <img className='illustrationWorking' src={illustrationWorking} alt="illustrationWorking" />
        </section>
        <section className='sectionTitle'>
        <h1 className='titleHome'>More than just shorter links</h1>
        <p className='paragraphHome'>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className='getStartedButton'>Get Started</button>
        </section>
    </div>
  )
}

export default Home