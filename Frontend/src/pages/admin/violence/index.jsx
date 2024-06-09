import React, { useEffect, useState } from "react";
import {
  Box,
  Icon,
  SimpleGrid,
  useColorModeValue,
  AspectRatio
} from "@chakra-ui/react";
import '../../../assets/css/App.css';
import MiniStatistics from "../../../components/card/MiniStatistics";
import IconBox from "../../../components/icons/IconBox";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
//accesos carnales
import TotalAccesosCarnales from "../security/components/TotalAccesosCarnales";
//homicidios
import HomicidiosPorMunicipio from "../security/components/HomicidiosPorMunicipio";
//Lesiones
import TotalLesiones from "../security/components/TotalLesiones";
//Hurtos
import TotalHurtos from "../security/components/TotalHurtos";

//Violecia Intrafamiliar
import TotalViolenciaIntrafamiliar from "../security/components/TotalViolenciaIntrafamiliar";

//Conflictos Armados
import ConflictosArmados from "../violence/components/ConflictosArmados";



export default function ViolenceReports() {

  const [areas, setAreas] = useState([]);

  //acceos carnales
  const [dataAccesos, setDataAccesos] = useState([]);

  // Hurtos
  const [dataHurtos, setDataHurtos] = useState([]);

  // Hurtos
  const [dataLesiones, setDataLesiones] = useState([]);


  //homicidios
  const [dataHomicidios, setDataHomicidios] = useState([]);
  const [conflictosArmadosData, setConflictosArmadosData] = useState([]);

   //Violencia Intrafamiliar
   const [dataViolenciaIntrafamiliar, setDataViolenciaIntrafamiliar] = useState([]);

  // Constants
  const center = [2.283333, -76.85];
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");


  useEffect(() => {
    // Fetch data accesos Carnales
    const fetchDataAccesos = async () => {
      try {
        const response = await fetch("http://localhost:3001/accesosCarnales");
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        const data = await response.json();
        setDataAccesos(data);
        setAreas([...new Set(data.map((d) => d.MUNICIPIO_HECHO_AcceCar))]);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };
    // Fetch data homicidios
    const fetchDataHomicidios = async () => {
      try {
        const response = await fetch("http://localhost:3001/homicidios1922");
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        const data = await response.json();
        setDataHomicidios(data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };

    fetchDataAccesos();
    fetchDataHomicidios();
  }, []);

  // Fetch data Lesiones
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/conflictosArmados");
        if (!response.ok) {
          throw new Error("Error al obtener los datos del servidor");
        }
        const data = await response.json();
        setConflictosArmadosData(data);
      } catch (error) {
        console.error("Error al obtener los datos del servidor:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 3, "2xl": 3 }}
        gap='20px'
        mb='20px'
      >
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={BsGenderMale} color={brandColor} />
              }
            />
          }
          name={`olix2`}
          value={2020}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={BsGenderMale} color={brandColor} />
              }
            />
          }
          name={`Nacimientos de Hombres en 2022`}
          value={2020}
        />
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg={boxBg}
              icon={
                <Icon w='32px' h='32px' as={BsGenderFemale} color={brandColor} />
              }
            />
          }
          name={`Nacimientos de Mujeres en 2021`}
          value={4334}
        />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
         <ConflictosArmados data={conflictosArmadosData} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalAccesosCarnales
          data={dataAccesos}
          areas={areas}
          onAreaChange={() => { }}
        />

        <TotalLesiones data={dataLesiones} />

      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        <AspectRatio ratio={16 / 9}>
          <TotalHurtos
            data={dataHurtos}
          />
        </AspectRatio>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 1 }} gap="20px">
          <TotalViolenciaIntrafamiliar data={dataViolenciaIntrafamiliar} />

        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
}
