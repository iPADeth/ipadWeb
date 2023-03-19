import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

export const Roadmap = () => {
  return (
    <>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'rgb(40, 42, 53, 0.7)',
            color: '#fff',
            borderRadius: '1.5rem',
          }}
          contentArrowStyle={{
            borderRight: '8px solid  rgb(40, 42, 53, 0.7)',
          }}
          iconStyle={{ background: 'rgb(0, 238, 255, 0.8)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title text-center'>
            PHASE ONE
          </h3>

          <p className='customFont2'>* Develop & Launch Website</p>
          <p className='customFont2'>* Create Socials</p>
          <p className='customFont2'>* Build Organic Community</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'rgb(40, 42, 53, 0.7)',
            color: '#fff',
            borderRadius: '1.5rem',
          }}
          contentArrowStyle={{
            borderRight: '8px solid  rgb(40, 42, 53, 0.7)',
          }}
          iconStyle={{ background: 'rgb(0, 238, 255, 0.8)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title text-center'>
            PHASE TWO
          </h3>

          <p className='customFont2'>* CMC & CG Listing</p>
          <p className='customFont2'>* Launch BETA DAPP</p>
          <p className='customFont2'>* Partnerships with Influencers</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{
            background: 'rgb(40, 42, 53, 0.7)',
            color: '#fff',
            borderRadius: '1.5rem',
          }}
          contentArrowStyle={{
            borderRight: '8px solid  rgb(40, 42, 53, 0.7)',
          }}
          iconStyle={{ background: 'rgb(0, 238, 255, 0.8)', color: '#fff' }}
        >
          <h3 className='vertical-timeline-element-title text-center'>
            PHASE THREE
          </h3>

          <p className='customFont2'>* Launch Official Web3 DAPP</p>
          <p className='customFont2'>* Brand Marketing with Companies</p>
          <p className='customFont2'>* Major CEX Listing</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
