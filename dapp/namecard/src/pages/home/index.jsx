import React from 'react'

import Tag from '@/components/Tag'
import ContentWrapper from '@/components/ContentWrapper'
import NameCard from '@/components/NameCard'
import Resume from '@/components/Resume'

import logo from "@/assets/images/logo.png"
import homeActive from "@/assets/images/home-active.png"
import home from "@/assets/images/home.png"
import noticeActive from "@/assets/images/notice-active.png"
import notice from "@/assets/images/notice.png"
import avatar from "@/assets/images/avatar.png"
import add from "@/assets/images/add.png"
import twitter from "@/assets/images/twitter-white-30px.png"
import linkedin from "@/assets/images/linkedin-white-30px.png"
import github from "@/assets/images/github-white-30px.png"
import photo from "@/assets/images/photo.png"
import thumb from "@/assets/images/thumb.png"
import banner from "@/assets/images/banner.png"
import codeScreen from "@/assets/images/code.png"

const tags = [
  '3D animation',
  'Metaverse',
  'Web 3.0',
  'Illustration',
  'Brand Marketing',
  'Video Edit',
  'Writing',
]

const contentTypes = [
  'MirrorArticle',
  'Design',
  'Code',
]

const article = {
  type: 'article',
  title: 'LinkedIn Is No Longer',
  time: '13 days ago',
  paras: [
    'Here’s what it is now — It’s Monday morning. I grab a cup of coffee and log in to LinkedIn. It’s not long before I am rolling my eyes. It’s not a professional networking site anymore. LinkedIn is now primarily a salesHere’s what it is now — It’s Monday morning. I not long before I am …',
  ],
  image: thumb,
  fields: [
    'Leadership',
  ],
}

const design = {
  type: 'design',
  title: 'Design for the transport',
  time: '13 days ago',
  image: banner,
  fields: [
    'Leadership',
  ],
}

const code = {
  type: 'code',
  title: 'LinkedIn Is No Longer',
  time: '13 days ago',
  paras: [
    'Probably one of the most common make money online questions that I get asked on Quora and Twitter is, “How can I make $100 a day online?”',
    'Well, depending on your skills and the demand for those skills, you may or may not be able to earn at least $100 a day from a single website as a freelancer — especially when you are new to freelancing. That’s because there is often intense competition for good-paying gigs…',
  ],
  image: codeScreen,
  fields: [
    'Leadership',
  ],
}

const recommendedFields = [
  'Extreme Sport',
  'Web Design',
  'Brand Marketing',
  'Web 3.0',
]

const nameCardInfo = {
  name: 'Jane Cooper',
  email: 'mic***@example.com',
  addr: 'New York·US',
  phone: '529***704',
}

const resumeInfo = {
  name: 'Jane Cooper',
  email: 'mic***@example.com',
  addr: 'New York·US',
  phone: '529***704',
}

export default function index() {
  return (
    // 根元素，保证至少占满页面宽高
    <div className='min-w-screen min-h-screen relative flex justify-center font-Inter text-sm'>
      {/* 背景元素，用于页面左侧/右侧空白区域和左/右侧栏的背景色相一致 */}
      <div className='absolute top-0 bottom-0 left-0 right-0 flex'>
        <div className='w-1/2 bg-home-l'></div>
        <div className='w-1/2 bg-home-r'></div>
      </div>
      {/* 内容区域 */}
      <div className='flex z-10 relative'>
        {/* 左侧栏 */}
        {/* TODO: 为什么边框宽度只是设置 border-r-2 的话无效
          必须设置 border-solid border-t-0 border-b-0 border-l-0 border-r-2 才行？ */}
        <div className='fixed h-screen py-7 px-3 bg-home-l flex flex-col justify-between border-solid border-t-0 border-b-0 border-l-0 border-r-2 border-green-l'>
          {/* 上半部分的 logo 和页面切换按钮 */}
          <div className='flex flex-col'>
            {/* logo */}
            <div className='flex flex-col items-center'>
              <img className='w-logo' src={logo} alt="logo" />
              <span className='mt-4 font-Audiowide origin-left inline-block scale-xs'>SoulCard</span>
            </div>
            {/* 切换页面的按钮 */}
            <div className='mt-12 grow flex flex-col items-center'>
              {/* 首页的图标 */}
              <img className='w-icon mb-7' src={homeActive} alt="home" />
              {/* 消息页的图标 */}
              <img className='w-icon mb-7' src={notice} alt="notice" />
            </div>
          </div>
          {/* 下半部分的人物头像 */}
          <div className='flex flex-col items-center'>
            <img className='w-icon' src={avatar} alt="edit" />
            <span className='mt-2 origin-left inline-block scale-xs'>Wade</span>
          </div>
        </div>
        {/* 中间区域 */}
        <div className='ml-24 w-home-m flex flex-col py-7 bg-home-m'>
          <div className='mx-auto w-home-mi'>
            {/* 个人标签的展示及编辑 */}
            <div className='flex items-center'>
              <img className='w-icon' src={add} alt="add" />
              <div className='ml-4 text-xl'>Keep up with your profile</div>
            </div>
            <div className='mt-5 flex flex-wrap'>
              {
                tags.map((text) => <Tag key={text} text={text} />)
              }
              <span className='py-1 text-gray-500'>More</span>
            </div>
            {/* 个人介绍 */}
            todo: a selection to select all the DAO it's okay with none.
            todo: change iframe link with dynamic params
            <div className='mt-9'>
              <iframe style={{width: "600px", height: "420px"}} allow="clipboard-write;" src="http://localhost:4000/dynamic/noncegeek_dao?addr=0x9Fd4cAbe74b06992203CAdDb10536CEA6e55Cac5"></iframe>
            </div>
            todo: btn 0x00: setting the html;
            todo: btn 0x01: upload namecard as html to arweave; 
            https://arweave-uploader.surge.sh/?type=text/html
            todo: btn 0x02: download namecard as html/png;
            todo: btn 0x03: mint namecard as an NFT;
            
            {/* 分隔线 */}
            <div className='mt-5 w-full border-solid border-t border-b-0 border-l-0 border-r-0 border-white'></div>
            {/* 内容类型选择标签 */}
            {/* TODO: 当前所选内容类型和其他的颜色不同，且有下边框 */}
            <div className='sticky top-0 mt-2.5 bg-home-m flex space-x-16 justify-center text-nm'>
              {
                contentTypes.map((content) => <span key={content} className=''>{ content }</span>)
              }
            </div>
            {/* 文章卡片 */}
            <ContentWrapper {...article} />
            {/* 设计卡片 */}
            <ContentWrapper {...design} />
            {/* 代码卡片 */}
            <ContentWrapper {...code} />
          </div>
        </div>
        {/* 右侧栏 */}
        <div className='w-home-r flex flex-col py-7 ml-8'>
          {/* 搜索栏 */}
          {/* TODO: Chrome 中点击 input 后会有白色边框
            Devtool 可以看到是 :focus-visible 状态下增加了 outline 属性 */}
          <div className='w-full h-8 p-px rounded-full bg-gradient-to-r from-lg-green2-start to-lg-green2-end'>
            <input type="text" className="w-full h-full rounded-full border-0 pl-4 bg-home-r text-white text-tg rounded-lg focus:ring-0 focus:border-0 focus:outline-0 focus-visible:outline-0" placeholder="Search"></input>
          </div>
          {/* 推荐标签 */}
          <div className='pt-7'>
            <div className='text-sm'>Recommended fields</div>
            <div className='pt-3 flex flex-wrap'>
              {
                recommendedFields.map((text) => <Tag key={text} text={text} />)
              }
            </div>
          </div>
          {/* 个人图片？ */}
          <div className="mt-12">
            <div className='text-sm text-center'>Add instagram or writer let more people connect to you</div>
            <div className="mt-5 mx-auto flex justify-center space-x-4 items-center">
              <img className='w-7' src={twitter} alt="twitter" />
              <img className='w-7' src={linkedin} alt="linkedin" />
              <img className='w-7' src={github} alt="github" />
            </div>
          </div>
          {/* 预览？ */}
          <div className="mt-12">
            <div className="text-sm">Preview</div>
            <NameCard {...nameCardInfo} />
            <Resume {...resumeInfo} />
          </div>
        </div>
      </div>
    </div>
  )
}
