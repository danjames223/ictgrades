function SearchKey(){		
				var q=document.getElementById('q').value;
				var name="";
				var g1 = 0;
				var g2 = 0;
				var g3 = 0;
				var g4 = 0;
				var f=0;
				
				if (q=='0bC34827+A1'){
					name="AGLIPAY, JETTZHER DALE G.";
					g1=2.5;
					g2=3;
					g3=3;
					g4=3;
					f=1;
					
				}
				else if (q=='0bC34827+A2'){
					name="APOLINARIO, DAISYBETH B.";
					g1=1.25;
					g2=1.5;
					g3=1.75;
					g4=1.75;
					f=1;
				}
				else if (q=='0bC34827+C1'){
					name="CABALLERO, MARK NICOLE A.";
					g1=2.75;
					g2=3;
					g3=2.75;
					g4=3;
					f=1;
				}
				else if (q=='0bC34827+C2'){
					name="CANDAROMA, ADRIEL O.";
					g1=2.255;
					g2=2.75;
					g3=2.5;
					g4=2.75;
					f=1;
				}
				else if (q=='0bC34827+C3'){
					name="CARAANG, JESTHER ADRIANNE A.";
					g1=1.75;
					g2=2;
					g3=2;
					g4=1.75;
					f=1;
				}
				else if (q=='0bC34827+C4'){
					name="CORPUZ, CHRISTIAN JAY";
					g1=2.25;
					g2=2.5;
					g3=2.25;
					g4=2.5;
					f=1;
				}
				else if (q=='0bC34827+C5'){
					name="COMAMO, LERIC G.";
					g1=2;
					g2=2.25;
					g3=2.5;
					g4=2.25;
					f=1;
				}
				else if (q=='0bC34827+G1'){
					name="GONZALES, IRVIN DALE C.";
					g1=2;
					g2=2;
					g3=2.25;
					g4=2.25;
					f=1;
				}
				else if (q=='0bC34827+J1'){
					name="JUSTO, CHRISTIAN DEN A.";
					g1=2.5;
					g2=2.75;
					g3=2.75;
					g4=2.75;
					f=1;
				}
				else if (q=='0bC34827+M1'){
					name="MERCADO, PRINCESS JULLIEHANNE B.";
					g1=2;
					g2=2.5;
					g3=2.25;
					g4=2;
					f=1;
				}
				else if (q=='0bC34827+M2'){
					name="MENIL, ROSEL ALTHEA D.";
					g1=2;
					g2=2.5;
					g3=2.5;
					g4=2.25;
					f=1;
				}
				else if (q=='0bC34827+P2'){
					name="PUYOT, DHAN CHRISTIAN M.";
					g1=2.25;
					g2=2.75;
					g3=2.5;
					g4=2.5;
					f=1;
				}
				else if (q=='0bC34827+Q1'){
					name="QUINAJON, ANGEL MAE S.";
					g1=2.25;
					g2=2.5;
					g3=2.25;
					g4=2.25;
					f=1;
				}
				else if (q=='0bC34827+R4'){
					name="RANGASAN, JUSTIN NICO G.";
					g1=1.75;
					g2=2;
					g3=2;
					g4=1.75;
					f=1;
				}
				else if (q=='0bC34827+R5'){
					name="RANOS, GENESIS R.";
					g1=2.75;
					g2=3;
					g3=3;
					g4=2.75;
					f=1;
				}
				else if (q=='0bC34827+R6'){
					name="RAVELAS, JAN VINCENT D.";
					g1=2;
					g2=2.5;
					g3=2.25;
					g4=2;
					f=1;
				}
				else if (q=='0bC34827+R7'){
					name="REYES, MC KEVIN T.";
					g1=1.5;
					g2=1.5;
					g3=1.75;
					g4=1.5;
					f=1;
				}
				else if (q=='0bC34827+T1'){
					name="TABIAN, MAC KERNELLE C.";
					g1=2;
					g2=2.25;
					g3=2.25;
					g4=2.25;
					f=1;
				}
				else if (q=='0bC34827+T2'){
					name="TAGAVILLA, GLESHANE D.";
					g1=2.5;
					g2=2.5;
					g3=2.25;
					g4=2.5;
					f=1;
				}
				else if (q=='0bC34827+T3'){
					name="TOPINIO, JUSTINE JOSHUA";
					g1=2;
					g2=2.5;
					g3=2.25;
					g4=2;
					f=1;
				}
				else if (q=='0bC34827+T4'){
					name="TULALI, AMEEN NIKON D.";
					g1=2.25;
					g2=2.75;
					g3=2.5;
					g4=2.25;
					f=1;
				}
				else if (q=='0bC34827+U9'){
					name="UMADAC, JOHN CARLO L.";
					g1=1.5;
					g2=1.5;
					g3=1.75;
					g4=1.5;
					f=1;
				}
				else if (q=='0bC34827+V8'){
					name="VISQUERA, BENEDICT T.";
					g1=2;
					g2=2.25;
					g3=2;
					g4=2.25;
					f=1;
				}
				else{
					alert("No Result Found!");
					f=0;
				}
				if(f==1){
				document.write("<div style='width: 50%;margin-left: auto;margin-right: auto;'><center><img src='far-east-laoag.png' width='20%'><br><strong>FAR EAST COMPUTER TECHNOLOGY, INC.-LAOAG</strong><br>CAP BLDG. LAOAG CITY, ILOCOS NORTE<br><br><strong>CERTIFICATE OF GRADES</strong><br><br><p style='text-align:justify;'>This is to certify that <strong>"+ name +"</strong> has obtained the following grades on my subject for the School Year 2022-2023:</p><br><table border='1px;'style='text-align:center;'><tr><td>Subject Code</td><td>Subject Name</td><td>Grade</td></tr><tr><td>CE02</td><td>Network Analyis and Troubleshooting</td><td>"+ g1 +"</td></tr><tr><td>IT02</td><td>Data Analyses and Structure using C++</td><td>"+ g2 +"</td></tr><tr><td>IT04</td><td>Software Engineering</td><td>"+ g3 +"</td></tr><tr><td>WebDev01</td><td>Responsive Web Designing using HTMLL + CSS</td><td>"+ g4 +"</td></tr></table><p style='text-align:justify;'>This certificate is issued upon the request of the interested party.</p><br><br><p style='text-align:right;'><strong>DANIELLE JAMES L. CAÑETE<BR>SUBJECT TEACHER/ADVISER</strong></p><font size='1pt'><i>This is a computer generated certificate no sign available.</i></font><br><br><button id='noprint()' onclick='print()' class='noprint'>Print</button></center></div>");
				}
				
			}	