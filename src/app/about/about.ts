import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  storeStats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Brands' },
    { number: '100+', label: 'Cities' },
    { number: '5', label: 'Years Experience' }
  ];

  teamMembers = [
    {
      name: 'Vy Hourtong',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-1/577809773_2307975506300539_4623969032220545903_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=106&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH5C5QwGcHoKHKYPPXitVEXCeXdFbtgfkQJ5d0Vu2B-RBO8olUVx_6ynjP61ze05I9Yx1IUuOjxdLDc6QjsAyxv&_nc_ohc=cccx0ttbAMYQ7kNvwHgkTps&_nc_oc=AdlMKT8OY6Km4tPGyCoVCv6iNyoYfpPVZm5YHdouRhzJJMMVkglAZrrNV_GGmvr6sao&_nc_zt=24&_nc_ht=z-p3-scontent.fpnh5-3.fna&_nc_gid=jkLY2S5eilpg75tPFVcMSg&oh=00_AfhAIBRk8pRPXWATMhzWBxHdIUOIVwNbaa_WbSbjseWHvg&oe=692AF3DA'
    },
    {
      name: 'Ol Sokchetra',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t39.30808-1/469857398_2254903784896948_2495860437147234929_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeE0aYQhNErCiPvUIsXPAX19C0gIfdPjgHgLSAh90-OAeM0KT8tY-Agxkcoqeziano94A1uG17AxWo38lyamKpQ7&_nc_ohc=aa93CAQ15xsQ7kNvwHMsvSb&_nc_oc=AdnnIv5SKMB4DOKMBL44RtphEOIRa_63AQhjRI5CApF07geBXrM4z9xAi88It9dKRlQ&_nc_zt=24&_nc_ht=z-p3-scontent.fpnh5-1.fna&_nc_gid=SJJaPBjJ0EAClj7caVRFgQ&oh=00_AfgQlV91hbNuNlJQs8FW4g0LEaoGaFZ9sq0ptjWdV32ULw&oe=692B08B1'
    },
    {
      name: 'Ra Kimhort',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/482031192_1874320303379728_6923106805300249913_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHeLnmYAJb26QOzhKBL8_-Ex52VdfAcf-HHnZV18Bx_4RDziFLtpOUmrI8OmEl2OD74PjJSOXMNyFOmU-38tdG_&_nc_ohc=eMs-f5nw20wQ7kNvwFw0J1x&_nc_oc=AdkaMm3oHEh7uemVypeMbhFJSmCVwBzZ_LAlXMxEzgfEoYn1CqBsutG5Mcs_2JmPtuw&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&_nc_gid=ku7Fdi3cwX9JgJwI5Yy0Ow&oh=00_Afi2B2Vy222QYf4_NGsRRG_1cH_a9ed1JCYiCSCaC6rUnw&oe=692B0DAC'
    },
    {
      name: 'Phorn Chanthol',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-3.fna.fbcdn.net/v/t1.15752-9/566541233_1260365116135729_5299538204797408029_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFkvUxbcmPc_8W5dVFIy6W3gewce7hnFaKB7Bx7uGcVopudYhZHQPzie7VRqHSu4RM30ffiHUioJXhkLIkdRP4c&_nc_ohc=6_96zrOibAQQ7kNvwGrj4Q1&_nc_oc=Adm4va3yMqC6YX04crh0lbwkoP65HxH0YckdxSTvRZqNFzA9NQCn2Zo6I_QmcHdZ5NQ&_nc_ad=z-m&_nc_cid=1595&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-3.fna&oh=03_Q7cD3wFz34-zczr8XspQZF9cf79-c6XbzOMfJ7fyBKK_mXlBaA&oe=694C7FCB'
    },
    {
      name: 'Long Sereymuny',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-2.fna.fbcdn.net/v/t1.15752-9/553042827_1852520768689812_5666821294388770649_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEwZc-ggqB2OyfOrwjlFROvrupadADLMdyu6lp0AMsx3I-r0qZoZ0-4DRctNb4WDqkGLACnuh2ppY5ZeqV0fy-D&_nc_ohc=A01iMZhllU0Q7kNvwF1PVJM&_nc_oc=AdkjKOQaWl0xy0ZxMAES1IwSG04I5HNRg2z0-LT4UziVXwV3TRwfY9JFHRACQjKFqpc&_nc_ad=z-m&_nc_cid=1595&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-2.fna&oh=03_Q7cD3wGAFh3kWkW1a2QJXcaAGfYvghnQ9FiTdOpFvrtLYh8B0A&oe=694CAF32'
    },
    {
      name: 'Khim Chanborith',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-6.fna.fbcdn.net/v/t39.30808-1/490981753_1375298936836005_6875042572644348153_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeH5XDkvVQmtMpdS7v-vxCgMoRVMghODGEChFUyCE4MYQAwo2weM9tTtBuS9_TgTx9XZV9-ZW3JSN55v_EyslpiW&_nc_ohc=pWARxuwxnjYQ7kNvwE2xAKN&_nc_oc=Adkatxl_Ds1YK4-Kpn5OoFmssP4PnFy-8IYbxf-KAAuBZVY3QfWMcvURE_qYshZbWDk&_nc_zt=24&_nc_ht=z-p3-scontent.fpnh5-6.fna&_nc_gid=U5LQbsqpZNk84Ve4SdtYBQ&oh=00_AfiJfccXppyc2AxugBzjhLV1pZNowYCBlmpM0cmEGrgnBg&oe=692B0993'
    },
    {
      name: 'Thai Kimleng',
      role: 'member',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://z-p3-scontent.fpnh5-1.fna.fbcdn.net/v/t1.15752-9/575507204_800073356205506_7528811405400280587_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeELBmW_RnioVGgac8fWWZ9w7MJe8SU_JIbswl7xJT8khpEKXZgFNaaxenvkTj3qt0uSS3LK72TD71f5NKDvMeF9&_nc_ohc=Y58cLqDq898Q7kNvwEVBhIo&_nc_oc=Adnd_ko_c36_ghd4yNmrvmCJN5s-bdRUaCI0vGU2AJloOSVJznDyphy9x6GCUdFPgIk&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-1.fna&oh=03_Q7cD3wGoPgyfyg_7kLmQbONR5WQDR46y9l_JFI39ZIA8DM9bVg&oe=694CACAD'
    }
  ];

  // Fallback placeholder images from Unsplash
  placeholderImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80';
  heroPlaceholderImage = 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80';

  // Handle hero image error
  heroImageError(event: any) {
    event.target.src = this.heroPlaceholderImage;
  }

  // Handle team member image error
  teamImageError(event: any, member: any) {
    event.target.src = this.placeholderImage;
  }
}