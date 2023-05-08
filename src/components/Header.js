import React from 'react';

function Nav() {
    return (
        <nav>
            <div className='topNav'>
                <ul className='clientService'>
                    <li><a>고객 서비스</a></li>
                    <li><a>뉴스레터</a></li>
                    <li><a>매장 찾기</a></li>
                    <li className='menuIcon'><a>점3개 이미지</a></li>
                </ul>
                <div className='mainLogo'>
                    <img src="https://cdn.cookielaw.org/logos/6e0ffeab-df84-4fee-b293-9e6498bfa887/697b276d-c669-4d88-b115-dd9e6cae3fae/28a9d5ed-4776-4fe0-9e19-007e8ed817a9/709px-H&M-Logo.svg.png" alt="hm logo" />
                </div>
                <ul className='clientShopping'>
                    <li><a>로그인</a></li>
                    <li><a>즐겨찾기</a></li>
                    <li><a>쇼핑백(0)</a></li> {/* 이거 0 나중에 함수로 빼야함 */}
                </ul>
            </div>
            
            <div className='bottomNav'>
                <ul className='category'>
                    <li><a>여성</a></li>
                    <li><a>Divided</a></li>
                    <li><a>남성</a></li>
                    <li><a>신생아/유아</a></li>
                    <li><a>아동</a></li>
                    <li><a>H&M HOME</a></li>
                    <li><a>스포츠</a></li>
                    <li><a>Sale</a></li>
                    <li><a>지속가능성</a></li>
                </ul>
                <div className='itemSearch'>
                    <input type="text" placeholder='제품 검색'></input>
                </div>
            </div>
            
        </nav>
    );
}

export default Nav;