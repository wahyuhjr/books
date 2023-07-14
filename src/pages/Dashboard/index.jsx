import React from 'react'
import Sidebar from '../../components/Sidebar';
import ContentLeft from '@/components/Contents/ContentLeft';
import ContentRight from '@/components/Contents/ContentRight';

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
        <Sidebar/>
        <ContentLeft/>
        <ContentRight/>
    </div>
  )
}

export default Dashboard;