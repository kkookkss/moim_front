import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/main/MainPage';
import SpaceList from '../pages/host/SpaceList';
import ReviewList from '../pages/review/ReviewList';
import Like from '../pages/like/Like';
import Detail from '../pages/roomsdetail/Detail';
import MainTheme from '../pages/main/Theme';
import Theme from '../pages/theme/Theme';
import AdminMain from '../pages/admin/AdminMain';
import BookingDetail from '../pages/booking/BookingDetail';
import BookingList from '../pages/booking/BookingList';
import BookingMain from '../pages/booking/BookingMain';
import SpaceAddForm from '../pages/host/SpaceAddForm';
import SpaceAddForm2 from '../pages/host/SpaceAddForm2';
import Login from '../pages/login/Login';
import SignUp from '../pages/login/SignUp';
import SignUpEmail from '../pages/login/SignUpEmail';
import Mypage from '../pages/mypage/Mypage';
import CategoryRoom from '../pages/categoryroom/CategoryRoom';
import SpaceAddForm3 from '../pages/host/SpaceAddForm3';
import Search from '../pages/search/Search';

function BasicRouter() {
	return (
		<>
			<Routes>
				<Route path='' element={<Mainpage />} />
				{/* 리뷰/Q&A 리스트(게스트) */}
				<Route path='review' element={<ReviewList />} />
				{/* 찜하기 */}
				<Route path='like' element={<Like />} />
				{/* 공간 상세페이지 */}
				<Route path='detail/:num' element={<Detail />} />
				{/* 메인페이지 theme component */}
				<Route path='main_theme' element={<MainTheme />} />
				{/* 기획전 페이지 */}
				<Route path='theme'>
					<Route path=':themeNum' element={<Theme />} />
				</Route>
				{/* 호스트 */}
				<Route path='host'>
					<Route path='slist' element={<SpaceList />} />
					<Route path='addform' element={<SpaceAddForm />} />
					<Route path='addform2/:num' element={<SpaceAddForm2 />} />
					<Route path='addform3/:num' element={<SpaceAddForm3 />} />
				</Route>
				{/* 호스트 끝 */}

				{/* 어드민_관리자 */}
				{/* <Route path='admin'>
					<Route path='' element={<AdminMain />} />
				</Route> */}

				{/* 예약페이지 */}
				<Route path='/booking'>
					<Route path='main' element={<BookingMain />} />
					<Route path='list' element={<BookingList />} />
					<Route path='detail' element={<BookingDetail />} />
				</Route>
				<Route path='login' element={<Login />} />
				<Route path='signup' element={<SignUp />} />
				<Route path='signupEmail' element={<SignUpEmail />} />
				<Route path='mypage' element={<Mypage />} />

				{/* 카테고리별 방 페이지 */}
				<Route path='categoryroomList'>
					<Route path=':categoryNum' element={<CategoryRoom />} />
				</Route>

				{/* 공간 통합검색 */}
				<Route path='searchroom' element={<Search name={"React"} />}>
					{/* <Route path=':searchWord' element={<Search />} /> */}
				</Route>

				<Route
					path='*'
					element={
						<div>
							<h1>잘못된 URL 주소입니다</h1>
						</div>
					}
				/>
			</Routes>
		</>
	);
}

export default BasicRouter;
