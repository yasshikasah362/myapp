import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";


const Nav = () => {
  return (
    <div className='one' style={{height:'10vh', width:'100%', backgroundColor:'#032541', display:'flex',alignItems:'center',justifyContent:'center',gap:'300px'}}>
        <div style={{height:'100%',width:'10%',}} className="part1">
        <img style={{height:'100%'}} src="https://th.bing.com/th/id/R.956586e26926adcee4b411fa2642436f?rik=zd9fOyCyxfZapw&riu=http%3a%2f%2fwww.szquanli.com%2fuploads%2fallimg%2f200415%2f2-200415092044.png&ehk=NASYMdGiVN03%2fHTcTs0GDjz%2fbj32PrYzZz4hry5Zbcc%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
        <div style={{height:'100%',width:'40%',display:'flex',alignItems:'center',justifyContent:'center',gap:'30px'}} className="part1">
       <Link style={{textDecoration:'none',color:'white'}} href='/'>Popular Movies</Link>
       <Link style={{textDecoration:'none',color:'white'}} href='popularTvShow'>Popular Tv Show</Link>
        <Link style={{textDecoration:'none',color:'white'}} href='search'> Search 🔍 </Link>
        <Link style={{textDecoration:'none',color:'white'}} href='#'>Login</Link>
        <Link style={{textDecoration:'none',color:'white'}} href='#'>Join Tmdb</Link>

        </div>
        
    </div>
  )
}

export default Nav