import React from 'react'
import { Container, Col, Row, Button, Card, Image } from 'react-bootstrap'
import ScrollText from '../Components/ScrollText/index.tsx'

import { Roadmap } from '../Components/Roadmap/RoadMap'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ReactComponent as DAPP } from './assets/dapp.svg'
import { ReactComponent as Space } from './assets/space.svg'
import { ReactComponent as Star } from './assets/star.svg'
import { ReactComponent as Heart } from './assets/heart.svg'
import { ReactComponent as Hi } from './assets/hi.svg'
import { ReactComponent as Taxes } from './assets/taxes.svg'

const rainbow = [
  '#00ff00',
  '#bf00ff',
  '#00ff00',
  '#bf00ff',
  '#00ff00',
  '#bf00ff',
  '#00ff00',
]

function Section({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? 'none' : 'translateX(-200px)',
          opacity: isInView ? 1 : 0,
          transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        }}
      >
        {children}
      </span>
    </section>
  )
}

const HomeScreen = () => {
  return (
    <>
      <section className='mt-9'>
        <ScrollText className='dotStyle ' />
      </section>
      <section id='about'>
        <Container className='dotStyle'>
          <section className='mt-6'>
            <h3>The Future of Launchpads, Powered by Shibarium</h3>
            <h5>
              Developing comprehensive tools for the Decentralized Finance
              ecosystem.
            </h5>

            <h4 className='mt-9'>JOIN THE COMMUNITY 🚀</h4>
          </section>
          <section>
            <Row className=' mt-6 '>
              <Col xs={12} sm={12} md='auto'>
                <Button className=' my-5 sign-in' variant='dark'>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href='https://t.me/iPADeth' target='blank'>
                      <h5 className='navBTN'>TELEGRAM</h5>
                    </a>
                  </motion.div>
                </Button>
                <Button className='mx-3 my-5 sign-in' variant='dark'>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href='https://twitter.com/inuPADETH' target='blank'>
                      <h5 className='navBTN'>TWITTER</h5>
                    </a>
                  </motion.div>
                </Button>
                <Button className='sign-in' variant='dark'>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <a href='#' target='blank'>
                      <h5 className='navBTN '>CHART</h5>
                    </a>
                  </motion.div>
                </Button>
              </Col>
            </Row>
          </section>
        </Container>
      </section>

      <section className='mt-9' id='ecosystem'>
        <Container className='dotStyle'>
          <Row className=' justify-content-md-center'>
            <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
              <Hi className='imgSize2' />
            </Col>
          </Row>
          <Section>
            <h1 className='customFont3 text-center'>$iPAD ECOSYSTEM</h1>
          </Section>
          <section className='mt-9'>
            <section className='mt-9'>
              <Container className='dotStyle'>
                <h4 className='text-center'>
                  iNUPAD offers a comprehensive set of tools for developers,
                  founders, traders, yield farmers and more, helping to foster
                  the development of the decentralized finance ecosystem on the
                  Shibarium Blockchain.
                </h4>
              </Container>
            </section>
            <section className='mt-9'>
              <Row className=' justify-content-md-center'>
                <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                  <h4></h4>
                  <Card className='bg-black p-4 mt-9'>
                    <Card.Img variant='top' src='../../rocket.png' />
                    <Card.Title>
                      <h2 className='text-center'>#1 iPAD</h2>
                    </Card.Title>
                    <Card.Body>
                      <h4>
                        iNUPAD is a secure, decentralized fundraising and
                        initial distribution platform, built on the innovative
                        Shibarium protocol, which provides projects with the
                        ability to raise capital and guarantee safety to
                        early-stage investors.
                      </h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                  <Card className='bg-black p-4 mt-9'>
                    <Card.Img variant='top' src='../../comp.png' />
                    <Card.Title>
                      <h2 className='text-center'>#2 iLEND</h2>
                    </Card.Title>
                    <Card.Body>
                      <h4>
                        iNUPAD's pool-based lending and borrowing protocol
                        provides users with a streamlined way to access loans,
                        eliminating the need for loan matching. Utilizing pooled
                        funds, the protocol enables borrowers to access loans
                        with their collateral as security.
                      </h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                  <Card className='bg-black p-4 mt-9'>
                    <Card.Img variant='top' src='../../man.png' />
                    <Card.Title>
                      <h2 className='text-center'>#3 iVIEW</h2>
                    </Card.Title>
                    <Card.Body>
                      <h4>
                        iNUPAD is a decentralized fundraising and initial
                        distribution platform built on Shibarium, providing
                        projects with a secure way to raise capital and protect
                        early-stage investors.
                      </h4>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                  <Card className='bg-black p-4 mt-9'>
                    <Card.Img variant='top' src='../../coin.png' />
                    <Card.Title>
                      <h2 className='text-center'>#4 iFARM</h2>
                    </Card.Title>
                    <Card.Body>
                      <h4>
                        iNUPAD provides users with a yield farming protocol that
                        enables them to maximize the return on their assets by
                        leveraging high-yielding farming opportunities.
                      </h4>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </section>
          </section>
        </Container>
      </section>
      <section>
        <Container className='dotStyle ' id='tokenomics'>
          <section className='mt-6'>
            <Row className=' justify-content-md-center'>
              <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                <Heart className='imgSize2' />
              </Col>
            </Row>
          </section>
          <Section>
            <h1 className='customFont3'>THE iPAD DAPP</h1>
          </Section>
          <Row className=' justify-content-md-center'>
            <Col className='text-center' xs={12} sm={12} md='auto'>
              <Card className='bg-black p-4 mt-9'>
                <DAPP className='imgSize' />
              </Card>
            </Col>
          </Row>
          <Row className=' justify-content-md-center'></Row>
        </Container>
      </section>
      <section>
        <Container className='dotStyle ' id='tokenomics'>
          <section className='mt-6'>
            <Row className=' justify-content-md-center'>
              <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                <Star className='imgSize2' />
              </Col>
            </Row>
          </section>
          <Section>
            <h1 className='customFont3'>TOKENOMICS</h1>
          </Section>
          <Row className=' justify-content-md-center'>
            <Col className='text-center' xs={12} sm={12} md='auto'>
              <Card className='bg-black p-4 mt-9'>
                <Taxes className='imgSize' />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='mt-6' id='roadmap'>
        <Container className='dotStyle'>
          <section className='mt-6'>
            <Row className=' justify-content-md-center'>
              <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                <Star className='imgSize2' />
              </Col>
            </Row>
          </section>
          <h1 className='customFont1 text-center'>Roadmap</h1>
          <section className='mt-9'>
            <Roadmap />
          </section>
        </Container>
      </section>
      <section id='faq'>
        <Container>
          <section className='mt-6'>
            <Row className=' justify-content-md-center'>
              <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
                <Space className='imgSize2' />
              </Col>
            </Row>
          </section>
          <Section>
            <h1 className='customFont1 text-center mt-9'>FAQ</h1>
          </Section>
        </Container>
      </section>
      <section className=''>
        <Container>
          <Row className='justify-content-md-center'>
            <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
              <h3 className='text-center customFont2 mt-9'>What is iNUPAD?</h3>
            </Col>
            <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
              <Card className='bg-black mt-9'>
                <h4 className='p-3'>
                  iNUPAD is a rapidly growing platform that is creating a suite
                  of tools for the Decentralized Finance space. Since its
                  launch, it has gained traction in the cryptocurrency
                  community, particularly among those who are looking to invest
                  in the SHIB token.
                </h4>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className='mt-9'>
          <Row className='justify-content-md-center align-items-center my-8'>
            <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
              <h3 className='mt-9 text-center customFont2'>
                Where can I buy iNUPAD?
              </h3>
            </Col>
            <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
              <Card className='bg-black mt-9'>
                <h4 className='p-3'>
                  iNUPAD is available for purchase on Uniswap. The date and
                  contract will be posted in Telegram.
                </h4>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className='mt-9'>
          <Row className='justify-content-md-center align-items-center my-8'>
            <Col
              className='text-center text-md-start'
              xs={12}
              sm={12}
              md='auto'
              lg={5}
              xl={5}
            >
              <h3 className='text-center customFont2 mt-9'>
                When does the DAPP launch?
              </h3>
            </Col>
            <Col xs={12} sm={12} md='auto' lg={5} xl={5}>
              <Card className='bg-black mt-9'>
                <h4 className='p-3'>
                  The beta version of the DAPP will be available for testing a
                  week after iNUPAD token launch.
                </h4>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomeScreen
