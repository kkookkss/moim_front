import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';

import Home from './pages/components/Home';
import List1 from './pages/components/List1';
import List2 from './pages/components/List2';
import Menu from './pages/components/Menu';
import SpaceList from './pages/host/SpaceList';
import MainPage from './pages/main/MainPage';
import Layout from './pages/layout/Layout';
import MainTheme from './pages/main/MainTheme';

function RouterMain() {
	return (
		<div>
			{/* <Menu /> */}

			<Routes>
				{/* 메인페이지 */}
				<Route path='/' element={<Layout />} />
				<Route path='/menu1/list' element={<List1 />} />
				<Route path='/menu2'>
					<Route path='list' element={<List2 />} />
				</Route>
				<Route path='main_theme' element={<MainTheme />} />

				{/* 호스트 */}
				<Route path='host'>
					<Route path='slist' element={<SpaceList />} />
				</Route>
				{/* 호스트 끝 */}

				<Route
					path='*'
					element={
						<div>
							<h1>잘못된 URL 주소입니다</h1>
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default RouterMain;
