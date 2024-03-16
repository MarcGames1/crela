export interface UGC_Video {
  src: string;
  header: string;
  description: string;
  thumbnail: string;
}

class UgcVideo implements UGC_Video {
  thumbnail: string;
  src: string;
  header: string;
  description: string;

  constructor(src: string, header: string, description: string, thumbnail: string) {
    this.src = src;
    this.header = header;
    this.description = description;
    this.thumbnail = thumbnail;
  }
}

const ugcVideos: UGC_Video[] = [
  new UgcVideo('/UGC-portfolio/1.mp4', 'Exemplu 1', '@ Moonglow RO', '/UGC-portfolio/1.jpeg'),
  new UgcVideo('/UGC-portfolio/2.mp4', 'Exemplu 2', '@ Moonglow RO', '/UGC-portfolio/2.jpeg'),
  new UgcVideo('/UGC-portfolio/3.mp4', 'Exemplu 3', '@ Moonglow RO', '/UGC-portfolio/3.jpeg'),
  new UgcVideo('/UGC-portfolio/4.mp4', 'Exemplu 4', '@ Moonglow RO', '/UGC-portfolio/4.jpeg'),
  new UgcVideo('/UGC-portfolio/5.mp4', 'Exemplu 5', '@ Moonglow RO', '/UGC-portfolio/5.jpeg'),
  new UgcVideo('/UGC-portfolio/6.mp4', 'Exemplu 6', '@ Moonglow RO', '/UGC-portfolio/6.jpeg'),
  new UgcVideo('/UGC-portfolio/7.mp4', 'Exemplu 7', '@ Moonglow RO', '/UGC-portfolio/7.jpeg'),
  new UgcVideo('/UGC-portfolio/8.mp4', 'Exemplu 8', '@ Moonglow RO', '/UGC-portfolio/8.jpeg'),
  new UgcVideo('/UGC-portfolio/9.mp4', 'Exemplu 9', '@ Moonglow RO', '/UGC-portfolio/9.jpeg'),
  new UgcVideo('/UGC-portfolio/10.mp4', 'Exemplu 10', '@ Moonglow RO', '/UGC-portfolio/10.jpeg'),
  new UgcVideo('/UGC-portfolio/11.mp4', 'Exemplu 11', '@ Moonglow RO', '/UGC-portfolio/11.jpeg'),
  new UgcVideo('/UGC-portfolio/12.mp4', 'Exemplu 12', '@ Dolphin Travel & Events', '/UGC-portfolio/12.jpeg'),
  new UgcVideo('/UGC-portfolio/13.mp4', 'Exemplu 13', '@ Dolphin Travel & Events', '/UGC-portfolio/13.jpeg'),
  new UgcVideo('/UGC-portfolio/14.mp4', 'Exemplu 14', '@ Dolphin Travel & Events', '/UGC-portfolio/14.jpeg'),
  new UgcVideo('/UGC-portfolio/15.mp4', 'Exemplu 15', '@ Dolphin Travel & Events', '/UGC-portfolio/15.jpeg'),
  new UgcVideo('/UGC-portfolio/16.mp4', 'Exemplu 16', '@ Dolphin Travel & Events', '/UGC-portfolio/16.jpeg'),
  new UgcVideo('/UGC-portfolio/17.mp4', 'Exemplu 17', '', '/UGC-portfolio/17.jpeg'),
  new UgcVideo('/UGC-portfolio/18.mp4', 'Exemplu 18', '', '/UGC-portfolio/18.jpeg'),
]
 


const VideosData: UGC_Video[] = JSON.parse(JSON.stringify(ugcVideos))

export const UGC_VideosData = VideosData.reverse()