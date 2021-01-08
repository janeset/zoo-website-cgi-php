/*
* FILE : animals.cpp
* PROJECT : PROG2001 - Assignment #3
* PROGRAMMER : Janeth Santos and Hongsik Eom
* FIRST VERSION : Oct 23, 2020
* DESCRIPTION :
* file contains all the CGI webserver functionality used with cgi-zoo.html,
* using the GET method.
*/

#include <string>
#include <fstream>
#include <iostream>
#include <stdlib.h>
#include <regex>


using namespace std;

#pragma warning(disable : 4996)	

#define kMaxStr  51				// max leght for input value string
#define kMaxFolderStr  151		// max legnth for path string
#define kInputCount		2		// items to parse from input string


int main(void)
{


	char* inputData = NULL;
	char* pathCGI = NULL;
	char name[kMaxStr] = { "" };
	char animalName[kMaxStr] = { "" };
	char pathFolder[kMaxFolderStr] = { "" };



	printf("Content-type: text/html\n\n");
	inputData = getenv("QUERY_STRING");		// the input values using GET method 
	pathCGI = getenv("SCRIPT_NAME");		// interpreted pathname of the current CGI 



	//parse name and animal	input	
	if (sscanf(inputData, "%*[^=]%*c%[^&]%*c%*[^=]%*c%s", name, animalName) == kInputCount)  
	{

		int count = int(strlen(name));
		//replace the + in name with ' '
		for (int i = 0; i < count; i++)
		{
			if (name[i] == '+')
			{
				name[i] = ' ';
			}
		}
	}
	else
	{
		printf("<p>Invalid Data!</p>");
	}

	//parse cgi path 
	string fullpath = pathCGI;
	size_t found = fullpath.find_last_of('/');
	string filePath = fullpath.substr(1, found);



	//------------------------------------------HTML-------------------
	cout << "<!DOCTYPE html>\n";
	cout << "<html lang='en' dir='ltr'><head><meta charset='utf-8'><title> The " + (string)animalName + " - HJ Zoo </title>\n";
	cout << "<link rel='stylesheet' href='./css/animalServer.css'></head>\n";
	cout << "<body>\n";
	cout << "<h1><span>HJ Zoo</span></h1>\n";
	cout << "<h2>Hey <span>" + (string)name + "</span> here are some interesting facts about <span>The " + (string)animalName + "</span></h2>\n";
	cout << "<div id='table' align='center'>\n";
	cout << "<table><tr><td><img src='./theZoo/" + (string)animalName + ".jpg'></td>\n";
	cout << "<td class='animalDescription'>";

	// ------open txt file-------

	string textFilePath = filePath + "/theZoo/" + (string)animalName + ".txt";

	std::ifstream animalInfo(textFilePath);		//open file to be read

	cout << "<ul class='contents'>";
	if (animalInfo.is_open())					//checking the file is open
	{
		string line;
		while (getline(animalInfo, line))		//read line from file and store into string until file is empty.
		{
			cout << "<li>" + line + "</li><br>";			//display string on screen
		}
		animalInfo.close();						//close file.
	}
	cout << "</ul>\n";
	cout << "</td>\n";
	cout << "</tr></table></div></body></html>\n";


	//----------------------------------end html-----------------------------------------------

	return 0;
}
