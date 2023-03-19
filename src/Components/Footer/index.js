import { Container, Row, Col, Image } from 'react-bootstrap'

import { GrTwitter, GrMedium } from 'react-icons/gr'
import { FaTelegram } from 'react-icons/fa'

import './styles.css'

const Footer = () => {
  const axsn3494 = {
    marginBottom: '0.4rem',
  }
  const axsn3493 = {
    width: '1.5rem',
    height: '1.5rem',
    color: 'white',
    position: 'relative',
    alignItems: 'center',
    padding: '0.1rem',
    margin: '0.3rem',
  }
  return (
    <>
      <footer className='ftBG mt-6' style={{ zIndex: 1 }}>
        <Container>
          <section>
            <Row className='justify-content-md-center'>
              <Col md='auto' className='mt-4 my-2 text-md-start text-center'>
                <div className='logo text-center logo2'>
                  <a href='#about'>
                    <img src='../../logo.png' alt='Logo' title='Logo' />
                  </a>
                </div>
              </Col>
            </Row>
            <Row className='justify-content-md-center'>
              <Col md='auto' className='mt-4 my-2 text-md-start'>
                <p className='text-center' style={{ color: '#fff' }}>
                  iNUPAD
                </p>
                <p className='text-center' style={{ color: '#fff' }}>
                  COPYRIGHT 2023
                </p>
              </Col>
            </Row>
          </section>
          <section>
            <Container>
              <Row className='justify-content-md-center'>
                <Col className=' my-3 text-md-start text-center' md='auto'>
                  <a href='#about' rel='noreferrer' style={{ color: '#fff' }}>
                    <h5 className='h5Font'>ABOUT</h5>
                  </a>
                </Col>
                <Col md='auto' className='text-md-start text-center my-3 '>
                  <a
                    href='#ecosystem'
                    rel='noreferrer'
                    style={{ color: '#fff' }}
                  >
                    <h5 className='h5Font'>ECOSYSTEM</h5>
                  </a>
                </Col>
                <Col className='text-md-start text-center my-3' md='auto'>
                  <a href='#roadmap' rel='noreferrer' style={{ color: '#fff' }}>
                    <h5 className='h5Font'>ROADMAP</h5>
                  </a>
                </Col>
                <Col className='text-md-start text-center my-3' md='auto'>
                  <a href='#faq' rel='noreferrer' style={{ color: '#fff' }}>
                    <h5 className='h5Font'>FAQ</h5>
                  </a>
                </Col>
                <Col className='text-md-start text-center my-3' md='auto'>
                  <a href='#' rel='noreferrer' style={{ color: '#fff' }}>
                    <h5 className='h5Font'>CHART</h5>
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
          <section>
            <Container className=''>
              <Row className=' justify-content-md-center'>
                <Col
                  md='auto'
                  style={axsn3494}
                  className='text-center text-md-start'
                >
                  <a
                    href='https://t.me/iPADeth'
                    target='blank'
                    rel='noreferrer'
                  >
                    <FaTelegram style={axsn3493} />
                  </a>
                  <a
                    href='https://twitter.com/inuPADETH'
                    target='blank'
                    rel='noreferrer'
                  >
                    <GrTwitter style={axsn3493} />
                  </a>
                </Col>
              </Row>
            </Container>
          </section>
        </Container>
      </footer>
    </>
  )
}

export default Footer
