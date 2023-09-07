
import { MotionValue, motion } from 'framer-motion';
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import * as THREE from 'three';

const color = "#000000";

//3D render
const Icosahedron = () => (
    <group scale={[2, 2, 2]}>
        <mesh rotation-x={0.95}>
            <icosahedronGeometry args={[1, 0]} />
            <meshBasicMaterial wireframe color={color} />
        </mesh>
    </group>
);

const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Mesh>(null);

    useLayoutEffect(() => {
        const distance = mix(2, 3.5, Math.random());
        const yAngle = mix(
            degreesToRadians(80),
            degreesToRadians(100),
            Math.random()
        );
        const xAngle = degreesToRadians(360) * p;
        ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });

    return (
        <group scale={[1.25, 1.25, 1.25]}>
            <mesh ref={ref}>
                <boxGeometry args={[0.05, 0.05, 0.05]} />
                <meshBasicMaterial wireframe color={color} />
            </mesh>
        </group>
    );
};

function Scene({ numStars = 200 }) {
    const gl = useThree((state) => state.gl);
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
        scrollYProgress,
        [0, 4],
        [0.1, degreesToRadians(360)]
    );
    const distance = useTransform(scrollYProgress, [0, 0.9], [10, 10]);
    const time = useTime();
    const sceneScale = useTransform(scrollYProgress, [1, 1], [1, 2]);

    useFrame(({ camera }) => {
        camera.position.setFromSphericalCoords(
            distance.get(),
            yAngle.get(),
            time.get() * 0.0005
        );
        camera.updateProjectionMatrix();
        camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => gl.setPixelRatio(0.3));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star p={progress(0, numStars, i)} />);
    }

    return (
        <>
            <group scale={[sceneScale.get(), sceneScale.get(), sceneScale.get()]}>
                <Icosahedron />
                {stars}
            </group>
        </>
    );
}

export default function ThreeDModel() {
    const canvasStyle: React.CSSProperties = {
        zIndex: -1, 
        position: 'absolute',
        top: 30,
        left: 0,
        width: '100%',
        height: '50%',

    };
    return (
        <div style={canvasStyle}>
            <Canvas gl={{ antialias: false }}>
                <Scene />
            </Canvas>
        </div>
    )
}