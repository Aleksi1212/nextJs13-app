import UserHome from "../../../src/components/userHome";
import { getUserData } from "../../../src/datalayer/querys";
import Profile from "../../../src/components/profileCard";

import Image from "next/image";
import Link from 'next/link'

import addDoc from '../../../src/images/addDoc.png'
import docMenu from '../../../src/images/docMenu.png'
import docShare from '../../../src/images/docShare.png'
import docRemove from '../../../src/images/docRemove.png'

async function UserHomePage({ params }: any) {
    const userData = await getUserData({ userId: params.id })

    let documents: any = []
    let userName: string = ''
    let userEmail: string = ''
    let userMethod: string = ''

    userData.map((card) => {
        card.documents.forEach((doc: any) => {
            documents.push(doc)
        })

        userName = card.username
        userEmail = card.email
        userMethod = card.method
    })



    return (
        <>
            <div className="absolute top-0 w-full h-[150vh] flex items-center flex-col">
                <h1 className="text-white text-5xl mt-24">Welcome Back {userName}</h1>

                <div className="max-w-[66rem] my-[6rem] flex gap-y-12 gap-x-12 flex-wrap ">
                        <div className="bg-white rounded-lg shadow-xl h-[15rem] w-[20rem] flex justify-center items-center cursor-pointer" id="doc">
                            <div className="flex flex-col items-center text-[#1A73E8] gap-y-8 mt-8">
                                <Image src={addDoc} alt="addDoc" />
                                <h1>Add New Design</h1>
                            </div>
                        </div>

                    {
                        documents.map((docCard: any) => {
                            return <DocumentCard key={docCard.docId} document={docCard} />
                        })
                    }
                </div>

                <hr className="bg-[#5D5D5D] opacity-40 w-[50rem] pb-[1.5px]" />

                <Profile userName={userName} userEmail={userEmail} id={params.id} method={userMethod} />
            </div>
            <UserHome />
        </>
    )
}

function DocumentCard({ document }: any) {
    const { docName, docId } = document || {}

    return (
        <Link className="bg-white rounded-lg shadow-xl h-[15rem] w-[20rem] flex justify-between flex-col cursor-pointer" id="doc" href={`document/${docId}`}>
            <h1 className="pt-3 pl-4 text-xl">{docName}</h1>

            <div className="flex justify-between pb-3">
                <Image src={docMenu} alt="docMenu" className="ml-4" />
                
                <div className="flex justify-evenly w-[6rem]">
                    <Image src={docShare} alt="docShare" />
                    <Image src={docRemove} alt="docRemove" />
                </div>
            </div>
        </Link>
    )
}


export default UserHomePage