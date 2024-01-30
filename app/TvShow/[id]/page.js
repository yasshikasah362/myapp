"use client";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Nav from "@/app/components/Nav"
import Bottom from "@/app/components/Bottom";
import style from "@/app/components/style.module.css";
import styles from "@/app/components/styles.module.css"

const page = ({ params }) => {
    const [info, setinfo] = useState({});
    const GetshowDetails = async () => {
        try {
            const { data } = await axios.get(
                `https://api.themoviedb.org/3/tv/${params.id}?api_key=223667d1239871fc4b6eeef8d0d6def8`
            );
            setinfo(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetshowDetails();
    }, []);

    const a = Math.floor(info.vote_average * 10);

    console.log(info);
    console.log(a)
    return <div>
        <Nav />

        <div className={style.show_main}>
            <div className={style.bg_image}>
                <div className={style.show_overlay}>


                    <div className="overdiv" style={{ height: '60vh', width: '20%',  position: 'absolute', marginLeft: '80px', marginTop: '30px', borderRadius: '20px', overflow: 'hidden' }}>
                        <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={`https://www.themoviedb.org/t/p/original/${info.poster_path}?api_key=223667d1239871fc4b6eeef8d0d6def8`} alt="" />
                    </div>
                    <h1 style={{ position: 'absolute', padding: '30px 450px', color: 'white' ,fontSize:'2rem' }}>{info.name}</h1>
                    <p style={{ position: 'absolute', padding: '250px 400px', color: 'white', fontSize: '1rem' }}> Overview <br />{info.overview}</p>

                    <div className={styles.paragraph}>{a && (<p className={styles.ptag}>{a}%</p>)}</div>
                    {/* <div className={style.circle}>{a && (<p >{a}%</p>)}</div> */}
                    <div className={styles.main}>
            <div className={styles.first}>
            <i style={{color:'white',fontSize:'1.5rem'}} className="ri-list-check"></i>
            </div>
            <div  className={styles.first}>
            <i style={{color:'white',fontSize:'1.5rem'}} className="ri-heart-line"></i>
            </div>
            <div className={styles.first}>
            <i style={{color:'white',fontSize:'1.5rem'}} className="ri-bookmark-line"></i>
            </div>
            <div className={styles.first}>
            <i style={{color:'white',fontSize:'1.5rem'}} className="ri-star-line"></i>
            </div>
            </div>

                </div>
                <img style={{ height: '100%', width: '100%', objectFit: 'cover' }} src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${info.backdrop_path}?api_key=223667d1239871fc4b6eeef8d0d6def8`} alt="" />

            </div>

        </div>

        {/* {JSON.stringify(info)} */}

        <div className={styles.cast}>
        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/uJNaSTsfBOvtFWsPP23zNthknsB.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Shameik Moore</h5>
    <p>Miles Morales / Spider-Man (voice)</p>
  </div>
        </div>

        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/q4UpZMEuvNCN5lL5L6xa3ICpheJ.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Hailee Steinfeld</h5>
    <p>Gwen Stacy / Spider-Woman (voice)</p>
  </div>
        </div>

        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/gCjMdmW1DiPAClHVl4zHEIffIsE.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">JasonSchwartzma</h5>
    <p>Jonathan Ohnn / Spot (voice)</p>
  </div>
        </div>

        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Oscar Isaac</h5>
    <p>Miguel O'Hara / Spider-Man 2099 </p>
  </div>
        </div>

        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/1UgDnFt3OteCJQPiUelWzIR5bvT.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Brian Tyree Henry</h5>
    <p>Jeff Morales (voice)</p>
  </div>
        </div>

        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/98BvmTJCZHx0jPv0oNcv04Jkmfb.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Luna Lauren Velez</h5>
    <p>Rio Morales (voice)</p>
  </div>
        </div>

        <div class="card" style={{width:'200px',height:'286px'}}>
  <img style={{height:'180px'}} src="https://www.themoviedb.org/t/p/w138_and_h175_face/3gASdJlbZYxTDYMaX6ALo4BDEjN.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Jake Johnson</h5>
    <p>Peter B. Parker / Spider-Man (voice)</p>
  </div>
        </div>

       



        </div>


        <Bottom />


    </div>
};

export default page;