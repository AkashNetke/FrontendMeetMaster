// const { event } = require("jquery");

// import { default as AgoraRTM } from "agora-rtm-sdk";






let localStream;
let remoteStream;
// const servers = {
//     iceservers:[
//         {
//             urls:['stun1.l.google.com:19302',
//                 'stun2.l.google.com:19302']
//         }
//     ]
// }

let init = async () => {

    

    localStream = await navigator.mediaDevices.getUserMedia({video:true , audio:false})
    document.getElementById('user-1').srcObject = localStream

} 




// let createOffer = async (MemberId) => {
//     peerConnection = new RTCPeerConnection(servers)

//     remoteStream = new MediaStream()
//     document.getElementById('user-2').srcObject = remoteStream

//     localStream.getTracks().forEach((track) => {
//         peerConnection.addTrack(track,localStream)
//     })

//     peerConnection.ontrack = (event) => {
//         event.streams[0].getTracks().forEach((track) => {
//             remoteStream.addTrack(track)
//         })
//     }

//     peerConnection.onicecandidate = async (event) => {
//         if(event.candidate)
//         {
//             console.log('New ICE candidate :', event.candidate)
//         }
//     }

//     let offer = await peerConnection.createOffer()
//     await peerConnection.setLocalDescription(offer)

// }

init()

