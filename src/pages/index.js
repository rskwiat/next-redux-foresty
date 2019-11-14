import React, { Component } from 'react'
import Head from 'next/head'
import Nav from '~/components/nav';
import { homeCard } from '~/actions';
import { connect } from 'react-redux';

class Home extends Component {

  updateCard = () => {
    this.props.homeCard();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
    
      <Nav />
  
      <div className='hero'>
        <h1 className='title'>Welcome to Next.js!</h1>
        <p className='description'>
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>
  
        <div className='row'>
          <div onClick={this.updateCard} className='card'>
            <h3>Documentation &rarr;</h3>
            <p>Learn more about Next.js in the documentation.</p>
          </div>
          <a href='https://nextjs.org/learn' className='card'>
            <h3>Next.js Learn &rarr;</h3>
            <p>Learn about Next.js by following an interactive tutorial!</p>
          </a>
          <a
            href='https://github.com/zeit/next.js/tree/master/examples'
            className='card'
          >
            <h3>Examples &rarr;</h3>
            <p>Find other example boilerplates on the Next.js GitHub.</p>
          </a>
        </div>
      </div>
  
    </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

export default connect(mapStateToProps, { homeCard })(Home);