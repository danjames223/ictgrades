function SearchKey(){		
				var q=document.getElementById('q').value;
				var name="";
				var g1 = 0;
				var g2 = 0;
				var g3 = 0;
				var g4 = 0;
				var g5 = 0;
				var g6 = 0;
				var g7 = 0;
				var gwa = 0;
				var f=0;
				
				if (q=='0bC34827+A1'){
					name="AGLIPAY, JETTZHER DALE G.";
					g1=5;
					g2=5;
					g3=5;
					g4=5;
					g5=5;
					g6=5;
					g7=5;
					gwa=5.000;
					f=1;
				}
				else if (q=='0bC34827+A2'){
					name="APOLINARIO, DAISYBETH B.";
					g1=1.25;
					g2=1.25;
					g3=1.75;
					g4=1.50;
					g5=1.50;
					g6=1.75;
					g7="~";
					gwa=1.500;
					f=1;
				}
				else if (q=='0bC34827+C3'){
					name="CARAANG, JESTHER ADRIANNE A.";
					g1=1.50;
					g2=1.50;
					g3=2.25;
					g4=2.00;
					g5=1.75;
					g6=1.75;
					g7=2.00;
					gwa=1.821;
					f=1;
				}
				else if (q=='0bC34827+C5'){
					name="COMAMO, LERIC G.";
					g1=2.00;
					g2=2.00;
					g3=2.50;
					g4=2.00;
					g5=2.00;
					g6=2.00;
					g7=2.25;
					gwa=2.125;
					f=1;
				}
				else if (q=='0bC34827+G1'){
					name="GONZALES, IRVIN DALE C.";
					g1=1.50;
					g2=1.75;
					g3=2.25;
					g4=2.25;
					g5=1.75;
					g6=1.75;
					g7="~";
					gwa=1.857;
					f=1;
				}
				else if (q=='0bC34827+M1'){
					name="MERCADO, PRINCESS JULLIEHANNE B.";
					g1=1.50;
					g2=1.75;
					g3=2.00;
					g4=2.00;
					g5=2.00;
					g6=2.00;
					g7=1.72;
					gwa=1.875;
					f=1;
				}
				else if (q=='0bC34827+P2'){
					name="PUYOT, DHAN CHRISTIAN M.";
					g1=1.75;
					g2=2.25;
					g3=2.25;
					g4=2.75;
					g5=2.25;
					g6=2.25;
					g7="~";
					gwa=2.250;
					f=1;
				}
				else if (q=='0bC34827+Q1'){
					name="QUINAJON, ANGEL MAE S.";
					g1=0;
					g2=0;
					g3=0;
					g4=0;
					g5=0;
					g6=0;
					g7=0;
					gwa=0;
					f=1;
				}
				else if (q=='0bC34827+R4'){
					name="RANGASAN, JUSTIN NICO G.";
					g1=1.50;
					g2=1.50;
					g3=1.75;
					g4=2.00;
					g5=1.75;
					g6=1.75;
					g7=1.50;
					gwa=1.679;
					f=1;
				}
				else if (q=='0bC34827+R6'){
					name="RAVELAS, JAN VINCENT D.";
					g1=2.75;
					g2=2.25;
					g3=2.25;
					g4=2.75;
					g5=2.75;
					g6=2.50;
					g7=2.50;
					gwa=2.500;
					f=1;
				}
				else if (q=='0bC34827+R7'){
					name="REYES, MC KEVIN T.";
					g1=1.50;
					g2=1.25;
					g3=2.25;
					g4=1.25;
					g5=1.50;
					g6=1.50;
					g7="~";
					gwa=1.542;
					f=1;
				}
				else if (q=='0bC34827+T1'){
					name="TABIAN, MAC KERNELLE C.";
					g1=5;
					g2=5;
					g3=5;
					g4=5;
					g5=5;
					g6=5;
					g7=5;
					gwa=5;
					f=1;
				}
				
				else if (q=='0bC34827+T4'){
					name="TULALI, AMEEN NIKON D.";
					g1=5;
					g2=5;
					g3=5;
					g4=5;
					g5=5;
					g6=5;
					g7=5;
					gwa=5;
					f=1;
				}
				else if (q=='0bC34827+U9'){
					name="UMADAC, JOHN CARLO L.";
					g1=1.50;
					g2=1.50;
					g3=1.75;
					g4=1.25;
					g5=1.50;
					g6=1.50;
					g7="~";
					gwa=1.500;
					f=1;
				}
				else if (q=='0bC34827+V8'){
					name="VISQUERA, BENEDICT T.";
					g1=1.50;
					g2=1.25;
					g3=2.25;
					g4=1.25;
					g5=1.75;
					g6=1.75;
					g7=1.75;
					gwa=1.643;
					f=1;
				}
				else{
					alert("No Result Found!");
					f=0;
				}
				if(f==1){
				document.write("<div style='font-family: Arial, Helvetica, sans-serif; width: 50%; margin-left: auto;margin-right: auto;'><center><img src='final-logo.png' width='30%'><br><strong>THE PREMIER ACADEMY OF ARTS OF TECHNOLOGY, INC.-LAOAG</strong><br>DLS 2 BLDG. M.V. FARI&Ntilde;AS ST. LAOAG CITY, ILOCOS NORTE<br><br><strong>CERTIFICATE OF GRADES</strong><br><br><p style='text-align:justify;'>This is to certify that <strong>"+ name +"</strong> has obtained the following grades of the 1st Semester of School Year 2023-2024 :</p><br><table border='1px;'style='text-align:left;'><tr><td><b>Subject Code</b></td><td><b>Subject Name</b></td><td><b>Grade</b></td></tr><tr><td>~</td><td>Bus. Org. Management</td><td>"+ g1 +"</td></tr><tr><td>~</td><td>Computer Drawing with Technical Drafting</td><td>"+ g2 +"</td></tr><tr><td>~</td><td>Intro to Linguistics</td><td>"+ g3 +"</td></tr><tr><td>~</td><td>JavaScript</td><td>"+ g4 +"</td></tr><tr><td>~</td><td>Office Suite 1 [Word,PowerPoint]</td><td>"+ g5 +"</td></tr><tr><td>~</td><td>Office Suite 2 [Excel,Access]</td><td>"+ g6 +"</td></tr><tr><td>~</td><td>Understanding Self</td><td>"+ g7 +"</td></tr><tr><td colspan=2 style='text-align:right;'><b>GWA:</b></td><td><b>"+ gwa +"</b></td></tr></table><p style='text-align:justify;'>This certificate is issued upon the request of the interested party.</p><br><br><p style='text-align:right;'><strong>DANIELLE JAMES L. CAÑETE<BR></strong>ADVISER</p><font size='1pt'><i>This is a computer generated certificate no sign available.<br>You may request a copy of grades to the Registar's Office.</i></font><br><br><button id='noprint()' onclick='print()' class='noprint'>Print</button></center></div>");
				}
				
			}	